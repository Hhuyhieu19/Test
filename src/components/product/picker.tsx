import { FinalPrice } from "components/display/final-price";
import { Sheet } from "components/fullscreen-sheet";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSetRecoilState } from "recoil";
import { cartState } from "state";
import { SelectedOptions } from "types/cart";
import { Product } from "types/product";
import { isIdentical } from "utils/product";
import { Box, Button, Text } from "zmp-ui";
import { MultipleOptionPicker } from "./multiple-option-picker";
import { QuantityPicker } from "./quantity-picker";
import { SingleOptionPicker } from "./single-option-picker";
import { SessionPicker } from "./session-picker";

export interface ProductPickerProps {
  product?: Product;
  selected?: {
    options: SelectedOptions;
    quantity: number;
  };
  selectedDate?: number;
  selectedTime?: number;
  children: (methods: {
    open: () => void;
    close: () => void;
    selectDate?: (date: number) => void;
    selectTime?: (time: number) => void;
  }) => ReactNode;
}

function getDefaultOptions(product?: Product) {
  if (product && product.variants) {
    return product.variants.reduce(
      (options, variant) =>
        Object.assign(options, {
          [variant.key]: variant.default,
        }),
      {}
    );
  }
  return {};
}

export const ProductPicker: FC<ProductPickerProps> = ({
  children,
  product,
  selected,
  selectedDate,
  selectedTime,
}) => {
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState<SelectedOptions>(
    selected ? selected.options : getDefaultOptions(product)
  );
  const [quantity, setQuantity] = useState(1);
  const setCart = useSetRecoilState(cartState);

  const [currentSelectedDate, setCurrentSelectedDate] = useState<number | undefined>(selectedDate);
  const [currentSelectedTime, setCurrentSelectedTime] = useState<number | undefined>(selectedTime);

  useEffect(() => {
    if (selected) {
      setOptions(selected.options);
      setQuantity(selected.quantity);
    }
  }, [selected]);

  const addToCart = () => {
    if (product) {
      setCart((cart) => {
        let res = [...cart];
        if (selected) {
          const editing = cart.find(
            (item) =>
              item.product.id === product.id &&
              isIdentical(item.options, selected.options)
          );
          if (editing) {
            if (quantity === 0) {
              res.splice(cart.indexOf(editing), 1);
            } else {
              const existed = cart.find(
                (item, i) =>
                  i !== cart.indexOf(editing) &&
                  item.product.id === product.id &&
                  isIdentical(item.options, options)
              );
              res.splice(cart.indexOf(editing), 1, {
                ...editing,
                options,
                quantity: existed ? existed.quantity + quantity : quantity,
                selectedDate: currentSelectedDate, // Cập nhật ngày đã chọn
                selectedTime: currentSelectedTime, // Cập nhật giờ đã chọn
              });
              if (existed) {
                res.splice(cart.indexOf(existed), 1);
              }
            }
          }
        } else {
          const existed = cart.find(
            (item) =>
              item.product.id === product.id &&
              isIdentical(item.options, options)
          );
          if (existed) {
            res.splice(cart.indexOf(existed), 1, {
              ...existed,
              quantity: existed.quantity + quantity,
              selectedDate: currentSelectedDate, // Cập nhật ngày đã chọn
              selectedTime: currentSelectedTime, // Cập nhật giờ đã chọn
            });
          } else {
            res = res.concat({
              product,
              options,
              quantity,
              selectedDate: currentSelectedDate,
              selectedTime: currentSelectedTime,
            });
          }
        }
        return res;
      });
    }
    setVisible(false);
};


  const [pickerType, setPickerType] = useState<"QuantityPicker" | "SessionPicker">("QuantityPicker");

  useEffect(() => {
    if (product) {
      if (product.categoryId.includes("Product") || product.categoryId.includes("Therapy") || product.categoryId.includes("Combo")) {
        setPickerType("QuantityPicker");
      } else if (product.categoryId.includes("Services")) {
        setPickerType("SessionPicker");
      }
    }
  }, [product]);

  return (
    <>
      {children({
        open: () => setVisible(true),
        close: () => setVisible(false),
        selectDate: (date) => setCurrentSelectedDate(date), // Cập nhật trạng thái khi chọn ngày
        selectTime: (time) => setCurrentSelectedTime(time), // Cập nhật trạng thái khi chọn giờ
      })}
      {createPortal(
        <Sheet visible={visible} onClose={() => setVisible(false)} autoHeight>
          {product && (
            <Box className="space-y-6 mt-2" p={4}>
              <Box className="space-y-2">
                <Text.Title>{product.name}</Text.Title>
                <Text>
                  <FinalPrice options={options}>{product}</FinalPrice>
                </Text>
                <Text>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.description ?? "",
                    }}
                  ></div>
                </Text>
              </Box>
              <Box className="space-y-5">
                {product.variants &&
                  product.variants.map((variant) =>
                    variant.type === "single" ? (
                      <SingleOptionPicker
                        key={variant.key}
                        variant={variant}
                        value={options[variant.key] as string}
                        onChange={(selectedOption) =>
                          setOptions((prevOptions) => ({
                            ...prevOptions,
                            [variant.key]: selectedOption,
                          }))
                        }
                      />
                    ) : (
                      <MultipleOptionPicker
                        key={variant.key}
                        product={product}
                        variant={variant}
                        value={options[variant.key] as string[]}
                        onChange={(selectedOption) =>
                          setOptions((prevOptions) => ({
                            ...prevOptions,
                            [variant.key]: selectedOption,
                          }))
                        }
                      />
                    )
                  )}
                {pickerType === "QuantityPicker" && (
                  <QuantityPicker value={quantity} onChange={setQuantity} />
                )}
                {pickerType === "SessionPicker" && (
                  <SessionPicker
                    value={quantity}
                    onChange={setQuantity}
                    onDateTimeChange={(date, time) => { // Sử dụng callback mới từ SessionPicker
                      setCurrentSelectedDate(date);
                      setCurrentSelectedTime(time);
                    }}
                  />
                )}
                {selected ? (
                  <Button
                    variant={quantity > 0 ? "primary" : "secondary"}
                    type={quantity > 0 ? "highlight" : "neutral"}
                    fullWidth
                    onClick={addToCart}
                  >
                    {quantity > 0
                      ? selected
                        ? "Cập nhật giỏ hàng"
                        : "Thêm vào giỏ hàng"
                      : "Xoá"}
                  </Button>
                ) : (
                  <Button
                    disabled={!quantity}
                    variant="primary"
                    type="highlight"
                    fullWidth
                    onClick={addToCart}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                )}
              </Box>
            </Box>
          )}
        </Sheet>,
        document.body
      )}
    </>
  );
};
