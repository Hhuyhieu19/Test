export type BoxData = {
    title: string;
    productIds: number[];
};

export const categoriesData: Record<string, BoxData[]> = {
    "Dịch vụ": [
        { title: "Dịch vụ body", productIds: [12, 16, 17, 18, 19, 20, 21, 22, 23] },
        { title: "Gội đầu thảo dược", productIds: [13] },
        { title: "Chăm sóc da mặt", productIds: [14, 24, 25, 26, ] },
        { title: "Dịch vụ triệt lông", productIds: [15, 17, 27, 28, 29, 30, 31, 32] },
    ],

    "Sản phẩm": [
        { title: "Chăm sóc da", productIds: [2] },
        { title: "Chăm sóc body", productIds: [3] },
        { title: "Chăm sóc da + body", productIds: [11] },
        { title: "Chăm sóc tóc", productIds: [8, 9, 10] },
        { title: "Chăm sóc sức khoẻ", productIds: [4, 5, 6 ] },
        { title: "Thực phẩm tự nhiên", productIds: [1, 7] },
    ],

    "Combo": [
        { title: "Combo sức khoẻ nhỏ xinh", productIds: [35, 36, 37, 38, 39, 40, 41, 42] },
        { title: "Combo sức khoẻ cao cấp", productIds: [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53] },
        { title: "Combo đồng hành", productIds: [54, 56, 57, 58] },
    ],
};