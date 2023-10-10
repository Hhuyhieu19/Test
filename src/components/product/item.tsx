import { FinalPrice } from "components/display/final-price";
import React, { FC } from "react";
import { Product } from "types/product";
import { Box, Text } from "zmp-ui";
import { ProductPicker } from "./picker";

export const ProductItem: FC<{ product: Product }> = ({ product }) => {
  return (
    <Box className="product-box p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <ProductPicker product={product}>
        {({ open }) => (
          <div className="space-y-2 cursor-pointer" onClick={open}>
            <Box className="w-full aspect-square relative mb-2">
              <img
                loading="lazy"
                src={product.image}
                alt={product.name}
                className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
              />
            </Box>
            <Text className="font-semibold">{product.name}</Text>
            <Text size="xxSmall" className="text-gray pb-2">
              <FinalPrice>{product}</FinalPrice>
            </Text>
          </div>
        )}
      </ProductPicker>
    </Box>
  );
};
