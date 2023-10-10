import { ProductItem } from "components/product/item";
import React, { FC, Suspense } from "react";
import { useRecoilValue } from "recoil";
import {
  categoriesState,
  productsByCategoryState,
  selectedCategoryIdState,
} from "state";
import { Box, Header, Page, Tabs, Text } from "zmp-ui";
import { CategoryId } from "types/category";
import { categoriesData } from "types/box";// Import dữ liệu từ file box.ts

const CategoryPicker: FC = () => {
  const categories = useRecoilValue(categoriesState);
  const selectedCategory = useRecoilValue(selectedCategoryIdState);
  return (
    <Tabs
      scrollable
      defaultActiveKey={selectedCategory}
      className="category-tabs"
    >
      {categories.map((category) => (
        <Tabs.Tab key={category.id} label={category.name}>
          <Suspense>
            <CategoryProducts categoryId={category.id} />
          </Suspense>
        </Tabs.Tab>
      ))}
    </Tabs>
  );
};

const CategoryProducts: FC<{ categoryId: string }> = ({ categoryId }) => {
  const category: CategoryId = categoryId as CategoryId;
  const productsByCategory = useRecoilValue(productsByCategoryState(category));
  const boxesData = categoriesData[category];

  return (
    <Box className="bg-background p-4">
      {boxesData.map((boxData) => (
        <Box key={boxData.title} className="mb-4">
          <Header title={boxData.title} />
          <Box className="grid grid-cols-2 gap-4">
            {boxData.productIds.map((productId) => {
              const product = productsByCategory.find(p => p.id === Number(productId));
              return product ? <ProductItem key={product.id} product={product} /> : null;
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const CategoryPage: FC = () => {
  return (
    <Page className="flex flex-col">
      <Header title="Danh mục" />
      <CategoryPicker />
    </Page>
  );
};

export default CategoryPage;
