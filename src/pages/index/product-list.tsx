import React, { FC, Suspense } from "react";
import { Section } from "components/section";
import { useRecoilValue } from "recoil";
import { productsState } from "state";
import { Box, Text } from "zmp-ui";
import { DisplayPrice } from "components/display/price";
import { FinalPrice } from "components/display/final-price";
import { ProductItemSkeleton } from "components/skeletons";
import { ProductPicker } from "components/product/picker";

export const ProductListContent: FC = () => {
  const products = useRecoilValue(productsState);

  // Lọc chỉ các sản phẩm có categoryId: ["Product"]
  const filteredProducts = products
    .filter((product) => product.categoryId.includes("Product"))
    .slice(0, 6);

  return (
    <Section title="Sản phẩm nổi bật">
      <Box className="grid grid-cols-2 gap-4" >
        {filteredProducts.map((product) => (
          <ProductPicker product={product} key={product.id}>
            {({ open }) => (
              <div onClick={open} className="space-y-3">
                <Box
                  className="relative aspect-square rounded-lg bg-cover bg-center bg-skeleton"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  {product.sale && product.sale.type === "fixed" && (
                    <Text
                      size="xxxxSmall"
                      className="absolute right-2 top-2 uppercase bg-green text-white h-4 px-[6px] rounded-full"
                    >
                      Giảm <DisplayPrice>{product.sale.amount}</DisplayPrice>
                    </Text>
                  )}
                  {product.sale && product.sale.type === "percent" && (
                    <Text
                      size="xxxxSmall"
                      className="absolute right-2 top-2 uppercase bg-green text-white h-4 px-[6px] rounded-full"
                    >
                      Giảm {product.sale.percent * 100}%
                    </Text>
                  )}
                </Box>
                <Box className="space-y-1">
                  <Text size="small">{product.name}</Text>
                  <Text size="xxSmall" className="line-through text-gray">
                    <DisplayPrice>{product.price}</DisplayPrice>
                  </Text>
                  <Text size="large" className="font-medium text-primary">
                    <FinalPrice>{product}</FinalPrice>
                  </Text>
                </Box>
              </div>
            )}
          </ProductPicker>
        ))}
      </Box>
    </Section>
  );
};

export const ProductListFallback: FC = () => {
  const products = [...new Array(4)];

  return (
    <Section title="Sản phẩm nổi bật">
      <Box className="grid grid-cols-2 gap-4">
        {products.map((_, i) => (
          <ProductItemSkeleton key={i} />
        ))}
      </Box>
    </Section>
  );
};

export const ProductList: FC = () => {
  return (
    <Suspense fallback={<ProductListFallback />}>
      <ProductListContent />
    </Suspense>
  );
};
