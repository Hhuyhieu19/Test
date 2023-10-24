import { atom, selector, selectorFamily, useRecoilValue, useRecoilState } from "recoil";
import { getPhoneNumber, getUserInfo } from "zmp-sdk";

import service from "static/dichvu.svg";
import product from "static/sanpham.svg";
import therapy from "static/lieutrinh.svg";
import combo from "static/combo.svg";
import logo from "static/logo.jpg";

import sp1 from "static/sp1.jpg";
import sp2 from "static/sp2.jpg";
import sp3 from "static/sp3.jpg";
import sp4 from "static/sp4.jpg";
import sp5 from "static/sp5.jpg";
import sp6 from "static/sp6.jpg";
import sp7 from "static/sp7.jpg";
import sp8 from "static/sp8.jpg";
import sp9 from "static/sp9.jpg";
import sp10 from "static/sp10.jpg";
import sp11 from "static/sp11.jpg";
import sp12 from "static/sp12.jpg";
import sp13 from "static/sp13.jpg";
import sp14 from "static/sp14.jpg";
import sp15 from "static/sp15.jpg";
import sp16 from "static/sp16.jpg";
import sp17 from "static/sp17.jpg";
import sp18 from "static/sp18.jpg";
import sp19 from "static/sp19.jpg";
import sp20 from "static/sp20.jpg";
import sp21 from "static/sp21.jpg";
import sp22 from "static/sp22.jpg";
import sp23 from "static/sp23.jpg";
import sp24 from "static/sp24.jpg";
import sp25 from "static/sp25.jpg";
import sp26 from "static/sp26.jpg";
import sp27 from "static/sp27.jpg";
import sp28 from "static/sp28.jpg";
import sp29 from "static/sp29.jpg";
import sp30 from "static/sp30.jpg";
import sp31 from "static/sp31.jpg";


import lt1 from "static/lt1.jpg";
import lt2 from "static/lt2.jpg";

import cba1 from "static/cba1.jpg";
import cba2 from "static/cba2.jpg";
import cba3 from "static/cba3.jpg";
import cba4 from "static/cba4.jpg";
import cba5 from "static/cba5.jpg";
import cba6 from "static/cba6.jpg";
import cba7 from "static/cba7.jpg";
import cba8 from "static/cba8.jpg";

import cbb1 from "static/cbb1.jpg";
import cbb2 from "static/cbb2.jpg";
import cbb3 from "static/cbb3.jpg";
import cbb4 from "static/cbb4.jpg";
import cbb5 from "static/cbb5.jpg";
import cbb6 from "static/cbb6.jpg";
import cbb7 from "static/cbb7.jpg";

import cbc1 from "static/cbc1.jpg";
import cbc2 from "static/cbc2.jpg";
import cbc3 from "static/cbc3.jpg";
import cbc4 from "static/cbc4.jpg";
import cbc5 from "static/cbc5.jpg";

import cbd1 from "static/cbd1.jpg";
import cbd2 from "static/cbd2.jpg";
import cbd3 from "static/cbd3.jpg";
import cbd4 from "static/cbd4.jpg";

import nb1 from "static/nb1.jpg";
import nb2 from "static/nb2.jpg";
import nb3 from "static/nb3.jpg";
import nb4 from "static/nb4.jpg";

import { Category, CategoryId } from "types/category";
import { Product, Variant } from "types/product";
import { Cart } from "types/cart";
import { Notification } from "types/notification";
import { calculateDistance } from "utils/location";
import { Store } from "types/delivery";
import { calcFinalPrice } from "utils/product";
import { wait } from "utils/async";




export const userState = selector({
  key: "user",
  get: () => getUserInfo({}).then((res) => res.userInfo),
});

export const categoriesState = selector<Category[]>({
  key: "categories",
  get: () => [
    { id: "Services", name: "Dịch vụ", icon: service },
    { id: "Product", name: "Sản phẩm", icon: product },
    { id: "Therapy", name: "Liệu trình", icon: therapy },
    { id: "Combo", name: "Combo", icon: combo },
  ],
});


export const productsState = selector<Product[]>({
  key: "products",
  get: async () => {
    await wait(2000);
    return [
      {
        id: 1,
        name: "Mật ong Đắk Lắk",
        price: 159000,
        image: sp1,
        description:"Mật ong nguyên chất và tự nhiên giúp hỗ trợ giảm cân, da đẹp và cải thiện tiêu hoá và tăng cường hệ miễn dịch, tốt cho phụ nữ mang thai, người già và trẻ nhỏ.",
        categoryId: ["Product"],
        sale: {
          type: "fixed",
          amount: 10000,
        },
        variants: [
          {
            key: "size",
            label: "Loại",
            type: "single",
            default: "500",
            options: [
              {
                key: "250",
                label: "250ml",
                priceChange: {
                  type: "percent",
                  percent: -0.44025157233,
                },
              },
              {
                key: "500",
                label: "500ml",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "1000",
                label: "1000ml",
                priceChange: {
                  type: "percent",
                  percent: 0.94339622642,
                },
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Kem body",
        price: 350000,
        image: sp9,
        description:"Kem body giúp tái sinh da sau 5->7 ngày sử dụng, hết thâm nhanh, giúp da trắng sáng bật tông sau khi sử dụng, không rát, ngứa, châm chít, không đỏ…",
        categoryId: ["Product"],
        sale: {
          type: "fixed",
          amount: 50000,
        },
        variants: [
          {
            key: "size",
            label: "Loại",
            type: "single",
            default: "DuongDa",
            options: [
              {
                key: "DuongDa",
                label: "Dưỡng da",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "Bongda",
                label: "Bong da",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Kem đông y tái tạo da",
        price: 800000,
        image: sp3,
        description:"Sản phẩm kem đông y tái tạo da chất lượng cao. Nó có khả năng giúp làm mịn và tái tạo làn da của bạn.<br>Sản phẩm phù hợp cho mọi loại da và có các loại kích thước để bạn lựa chọn.</li></ul>",
        categoryId: ["Product"],
        sale:{
          type: "fixed",
          amount: 150000,
        },
        variants: [
          {
            key: "size",
            label: "Loại",
            type: "single",
            default: "1-1",
            options: [
              {
                key: "1-1",
                label: "Loại 1-1",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "1",
                label: "Loại 1",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "2",
                label: "Loại 2",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "3",
                label: "Loại 3",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Tinh dầu chanh xả",
        price: 95000,
        image: sp7,
        description:"Với hương thơm mạnh mẽ và sảng khoái, tinh dầu chanh xả không chỉ giúp xua đuổi muỗi và côn trùng mà còn mang lại cảm giác tinh thần sảng khoái, giảm căng thẳng và mệt mỏi.",
        categoryId: ["Product"],
        sale:{
          type: "fixed",
          amount: 30000,
        },
        variants: [
          {
            key: "size",
            label: "Loại",
            type: "single",
            default: "10ml",
            options: [
              {
                key: "10ml",
                label: "10ml",
                priceChange: {
                  type: "percent",
                  percent: 0, 
                },
              },
              {
                key: "30ml",
                label: "30ml",
                priceChange: {
                  type: "percent",
                  percent: 2.10526315789, //265
                },
              },
              {
                key: "50ml",
                label: "50ml",
                priceChange: {
                  type: "percent",
                  percent: 2.73684210526, //325
                },
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "Tinh dầu cam",
        price: 95000,
        image: sp26,
        description:"Một làn hương ngọt ngào và trái cây từ tinh dầu cam giúp tạo ra một không gian ấm áp và thoải mái. Không chỉ giúp làm dịu tinh thần mà còn hỗ trợ trong việc giảm lo âu và căng thẳng.",
        categoryId: ["Product"],
        sale:{
          type: "fixed",
          amount: 30000,
        },
        variants: [
          {
            key: "size",
            label: "Loại",
            type: "single",
            default: "10ml",
            options: [
              {
                key: "10ml",
                label: "10ml",
                priceChange: {
                  type: "percent",
                  percent: 0, 
                },
              },
              {
                key: "30ml",
                label: "30ml",
                priceChange: {
                  type: "percent",
                  percent: 2.10526315789, //265
                },
              },
              {
                key: "50ml",
                label: "50ml",
                priceChange: {
                  type: "percent",
                  percent: 2.73684210526, //325
                },
              },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "Tinh dầu trà trắng",
        price: 190000,
        image: sp27,
        description:"Mang đến hương thơm tinh tế và thanh lịch của búp trà trắng mới hái, tinh dầu này giúp tạo nên một không gian yên bình và thư giãn. Với khả năng làm dịu tinh thần, nó lý tưởng cho những giây phút meditate hoặc thư giãn sau một ngày làm việc căng thẳng.",
        categoryId: ["Product"],
        sale:{
          type: "fixed",
          amount: 25000,
        },
        variants: [
          {
            key: "size",
            label: "Loại",
            type: "single",
            default: "10ml",
            options: [
              {
                key: "10ml",
                label: "10ml",
                priceChange: {
                  type: "percent",
                  percent: 0, 
                },
              },
              {
                key: "30ml",
                label: "30ml",
                priceChange: {
                  type: "percent",
                  percent: 0.96842105263, //349
                },
              },
              {
                key: "50ml",
                label: "50ml",
                priceChange: {
                  type: "percent",
                  percent: 3.07894736842, //750
                },
              },
            ],
          },
        ],
      },
      {
        id: 7,
        name: "Tinh bột nghệ nguyên chất",
        price: 45000,
        image: sp2,
        description:"Mật ong nguyên chất và tự nhiên giúp hỗ trợ giảm cân, da đẹp và cải thiện tiêu hoá và tăng cường hệ miễn dịch, tốt cho phụ nữ mang thai, người già và trẻ nhỏ.",
        categoryId: ["Product"],
        variants: [
          {
            key: "size",
            label: "Loại",
            type: "single",
            default: "100",
            options: [
              {
                key: "100",
                label: "100ml",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "250",
                label: "250ml",
                priceChange: {
                  type: "percent",
                  percent: 1.11111111111,
                },
              },
              {
                key: "500",
                label: "500ml",
                priceChange: {
                  type: "percent",
                  percent: 3.2,
                },
              },
              {
                key: "1000",
                label: "1000ml",
                priceChange: {
                  type: "percent",
                  percent: 7.2,
                },
              },
            ],
          },
        ],
      },
      {
        id: 8,
        name: "Dầu gội vỏ bưởi",
        price: 225000,
        image: sp4,
        description:"Dầu gội vỏ bưởi giúp giảm rụng tóc, nuôi dưỡng tóc từ sâu bên trong, cung cấp dưỡng chất giúp tóc chắc khỏe, phục hồi tóc hư tổn do tác động của môi trường và hóa chất, giúp tóc luôn khỏe mạnh, suôn mượt và mềm mại.",
        categoryId: ["Product"],
        variants: [
          {
            key: "size",
            label: "Loại",
            type: "single",
            default: "300",
            options: [
              {
                key: "300",
                label: "300ml",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "500",
                label: "500ml",
                priceChange: {
                  type: "percent",
                  percent: 0.48888888889,
                },
              },
            ],
          },
        ],
      },
      {
        id: 9,
        name: "Dầu xả vỏ bưởi",
        price: 225000,
        image: sp5,
        description:"Dầu xả vỏ bưởi giúp giảm rụng tóc, nuôi dưỡng tóc từ sâu bên trong, cung cấp dưỡng chất giúp tóc chắc khỏe, phục hồi tóc hư tổn do tác động của môi trường và hóa chất, giúp tóc luôn khỏe mạnh, suôn mượt và mềm mại.",
        categoryId: ["Product"],
        variants: [
          {
            key: "size",
            label: "Loại",
            type: "single",
            default: "300",
            options: [
              {
                key: "300",
                label: "300ml",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "500",
                label: "500ml",
                priceChange: {
                  type: "percent",
                  percent: 0.48888888889,
                },
              },
            ],
          },
        ],
      },
      {
        id: 10,
        name: "Serum xịt tóc vỏ bưởi",
        price: 220000,
        image: sp6,
        description:"Serum xịt tóc vỏ bưởi giúp giảm rụng tóc, nuôi dưỡng tóc từ sâu bên trong, cung cấp dưỡng chất giúp tóc chắc khỏe, phục hồi tóc hư tổn do tác động của môi trường và hóa chất, giúp tóc luôn khỏe mạnh, suôn mượt và mềm mại.",
        categoryId: ["Product"],
        variants: [],
      },
      {
        id: 11,
        name: "Serum phục hồi trắng da",
        price: 450000,
        image: sp8,
        description:"Serum phục hồi trắng da được chiết xuất hoàn toàn từ thảo dược, không tác dụng phụ lên da mặt, tuyệt đối an toàn. Chúng không chỉ giúp phục hồi làn da mỏng yếu mà còn là cứu tinh của những làn da nhiễm corticoid trong hành trình tìm lại làn da căng mịn, khỏe mạnh",
        categoryId: ["Product"],
        variants: [],
      },
      {
        id: 12,
        name: "Massage trị liệu cổ vai gáy",
        image: nb1,
        categoriesImg: sp28,
        price: 549000,
        sale: {
          type: "fixed",
          amount: 100000,
        },
        description: "Sử dụng dịch vụ Spa trị liệu để chữa bệnh đau mỏi vai gáy đang được nhiều người lựa chọn thay thế cho việc dùng thuốc.(449.000VND/60mins - 670.000VND/90mins)",
        categoryId: ["Services"],
        variants: [
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "60p",
            options: [
              {
                key: "60p",
                label: "60 phút",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "90p",
                label: "90 phút",
                priceChange: {
                  type: "fixed",
                  amount: +221000,
                },
              },
            ],
          },
        ], // Đảm bảo thêm mảng variants vào đây, ngay cả khi không có biến thể.
      },     
      {
        id: 13,
        name: "Gội đầu thảo dược",
        image: nb2,
        categoriesImg: sp29,
        price: 299000,
        sale: {
          type: "fixed",
          amount: 100000,
        },
        description: "Gội đầu thảo dược giúp đả thông kinh mạch, sảng khoái tinh thần, giúp hệ thần kinh luôn ổn định để hoạt động tốt hơn !!!",
        categoryId: ["Services"],
        variants: [
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "Coban",
            options: [
              {
                key: "Coban",
                label: "Cơ bản",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "ChuyenSau",
                label: "Chuyên sâu",
                priceChange: {
                  type: "percent",
                  percent: 0.33444816054,
                },
              },
            ],
          },
          {
            key: "KetHop",
            label: "Kết hợp",
            type: "multiple",
            default: [""], // Đảm bảo default là một mảng thay vì một chuỗi
            options: [
              {
                key: "Matna",
                label: "Đắp mặt nạ",
                priceChange: {
                  type: "percent",
                  percent: 0.33110367893,
                },
              },
              {
                key: "TayDaChet",
                label: "Tẩy da chết, da dầu",
                priceChange: {
                  type: "percent",
                  percent: 0.33110367893,
                },
              },
            ],
          },
        ],
      },      
      {
        id: 14,
        name: "Chăm sóc da mặt",
        price: 499000,
        image: nb3,
        categoriesImg: sp30,
        description: "",
        categoryId: ["Services"],
        sale: {
          type: "fixed",
          amount: 100000,
        },
        variants: [
          {
            key: "size",
            label: "Gói",
            type: "single",
            default:"MunNhe",
            options: [
              {
                key: "MunNhe",
                label: "Mụn nhẹ",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "MunNang",
                label: "Mụn nặng",
                priceChange: {
                  type: "fixed",
                  amount: +150000,
                },
              },
              {
                key: "ChuyenSau",
                label:"Chuyên sâu",
                priceChange:{
                  type: "fixed",
                  amount: +150000,
                },
              },
            ],
          },
        ],
      },      
      {
        id: 15,
        name:"Triệt lông body",
        image: nb4,
        categoriesImg: sp31,
        price: 2200000,
        categoryId:["Services"],
        description:"Triệt lông toàn thân - 1 buổi/2.000.000VND - Gói 10 buổi/16.000.000VND",
        sale:{
          type: "fixed",
          amount: 200000,
        },
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "TheoBuoi",
            options: [
              {
                key: "TheoBuoi",
                label: "Gói theo buổi",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "Combo10",
                label: "Combo 10 buổi",
                priceChange: {
                  type: "fixed",
                  amount: +14000000,
                },
              },
            ],
          },
        ],
      },
      {
        id: 16,
        name: "Massage body trị liệu toàn diện",
        image: sp10,
        price: 499000,
        description:"Massage body trị liệu toàn diện ( vai, lưng, fay, chân, đầu ): 499.000VND/70mins - 690.000VND/90mins",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "70p",
            options: [
              {
                key: "70p",
                label: "70 phút",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "90p",
                label: "90 phút",
                priceChange: {
                  type: "percent",
                  percent: 0.38276553106,
                },
              },
            ],
          },
        ],
      },
      {
        id: 17,
        name: "Massage body trị liệu giảm mỡ bụng",
        image: sp11,
        price: 499000,
        description:"Massage trị liệu giảm mỡ bụng ( kết hợp gừng-gel-hấp máy ): 499.000VND/70mins - 690.000VND/90mins",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "70p",
            options: [
              {
                key: "70p",
                label: "70 phút",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "90p",
                label: "90 phút",
                priceChange: {
                  type: "percent",
                  percent: 0.38276553106,
                },
              },
            ],
          },
        ],
      },
      {
        id: 18,
        name: "Massage tay",
        image: sp12,
        price: 449000,
        description:"Massage tay : 449.000VND/60mins - 670.000VND/90mins",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "60p",
            options: [
              {
                key: "60p",
                label: "60 phút",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "90p",
                label: "90 phút",
                priceChange: {
                  type: "percent",
                  percent: 0.49220489978,
                },
              },
            ],
          },
        ],
      },
      {
        id: 19,
        name: "Massage bầu",
        image: sp13,
        price: 449000,
        description:"Massage bầu : 449.000VND/60mins - 670.000VND/90minss",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "60p",
            options: [
              {
                key: "60p",
                label: "60 phút",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "90p",
                label: "90 phút",
                priceChange: {
                  type: "percent",
                  percent: 0.49220489978,
                },
              },
            ],
          },
        ],
      },
      {
        id: 20,
        name: "Massage trị liệu chân",
        image: sp14,
        price: 449000,
        description:"Massage trị liệu chân + Ngâm chân thảo mộc : 449.000VND/60mins - 670.000VND/90mins",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "60p",
            options: [
              {
                key: "60p",
                label: "60 phút",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "90p",
                label: "90 phút",
                priceChange: {
                  type: "percent",
                  percent: 0.49220489978,
                },
              },
            ],
          },
        ],
      },
      {
        id: 21,
        name: "Massage trị liệu ấn huyệt trượt giác đẩy cơ mông",
        image: sp15,
        price: 449000,
        description:"Massage trị liệu ấn huyệt trượt giác đẩy nâng cơ mông : 449.000VND/60mins - 670.000VND/90mins",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "60p",
            options: [
              {
                key: "60p",
                label: "60 phút",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "90p",
                label: "90 phút",
                priceChange: {
                  type: "percent",
                  percent: 0.49220489978,
                },
              },
            ],
          },
        ],
      },
      {
        id: 22,
        name: "Massage trị liệu thải độc gan",
        image: sp16,
        price: 449000,
        description:"Massage trị liệu thải độc gan : 449.000VND/60mins - 670.000VND/90mins",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "60p",
            options: [
              {
                key: "60p",
                label: "60 phút",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "90p",
                label: "90 phút",
                priceChange: {
                  type: "percent",
                  percent: 0.49220489978,
                },
              },
            ],
          },
        ],
      },
      {
        id: 23,
        name: "Massage trị liệu lưng thận",
        image: sp17,
        price: 449000,
        description:"Massage trị liệu lưng - thận : 449.000VND/60mins - 670.000VND/90mins",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "60p",
            options: [
              {
                key: "60p",
                label: "60 phút",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "90p",
                label: "90 phút",
                priceChange: {
                  type: "percent",
                  percent: 0.49220489978,
                },
              },
            ],
          },
        ],
      },
      {
        id: 24,
        name: "Massage trị liệu nâng cơ mặt bằng ngọc thạch",
        image: sp18,
        price: 350000,
        description:"Massage trị liệu nâng cơ mặt bằng ngọc thạch : 350.000VND/time",
        categoryId: ["Services"],
        variants:[],
      },
      {
        id: 25,
        name: "Phi kim tế bào gốc nuôi dưỡng, phục hồi làn da",
        image: sp19,
        price: 1600000,
        description:"Phi kim tế bào gốc nuôi dưỡng, phục hồi làn da : 1.600.000VND/time",
        categoryId: ["Services"],
        variants:[],
      },
      {
        id: 26,
        name: "Phi kim dưỡng chất làm mịn sáng da",
        image: sp20,
        price: 550000,
        description:"Phim kim dưỡng chất làm mịn sáng da : 550.000VND/time",
        categoryId: ["Services"],
        variants:[],
      },
      {
        id: 27,
        name: "Triệt lông vùng nách",
        image: sp21,
        price: 250000,
        description:"",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "TheoBuoi",
            options: [
              {
                key: "TheoBuoi",
                label: "Gói theo buổi",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "Combo10",
                label: "Combo 10 buổi",
                priceChange: {
                  type: "fixed",
                  amount: +1740000,
                },
              },
            ],
          },
        ],
      },
      {
        id: 28,
        name: "Triệt lông vùng ria",
        image: sp22,
        price: 119000,
        description:"",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "TheoBuoi",
            options: [
              {
                key: "TheoBuoi",
                label: "Gói theo buổi",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "Combo10",
                label: "Combo 10 buổi",
                priceChange: {
                  type: "fixed",
                  amount: +833000,
                },
              },
            ],
          },
        ],
      },
      {
        id: 29,
        name: "Triệt lông vùng tay",
        image: sp23,
        price: 300000,
        description:"",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "Goi1/2",
            options: [
              {
                key: "Goi1/2",
                label: "Gói 1/2 tay theo buổi",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
                
              },
              {
                key: "GoiFull",
                label: "Gói Full tay theo buổi",
                priceChange: {
                  type: "fixed",
                  amount: +100000,
                },
              },
              {
                key: "Combo1/2 10",
                label: "Combo 1/2 tay - 10 buổi",
                priceChange: {
                  type: "fixed",
                  amount: +2100000,
                },
              },
              {
                key: "ComboFull10",
                label: "Gói Full tay - 10 buổi",
                priceChange: {
                  type: "fixed",
                  amount: +2900000,
                },
              },
            ],
          },
        ],
      },
      {
        id: 30,
        name: "Triệt lông vùng chân",
        image: sp24,
        price: 350000,
        description:"",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "Goi1/2",
            options: [
              {
                key: "Goi1/2",
                label: "Gói 1/2 chân theo buổi",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
              {
                key: "GoiFull",
                label: "Gói Full chân theo buổi",
                priceChange: {
                  type: "fixed",
                  amount: +150000,
                },
              },
              {
                key: "Goi1/2 10",
                label: "Combo 1/2 chân - 10 buổi",
                priceChange: {
                  type: "fixed",
                  amount: +2450000,
                },
              },
              {
                key: "GoiFull 10",
                label: "Gói Full tay - 10 buổi",
                priceChange: {
                  type: "fixed",
                  amount: +3250000,
                },
              },
            ],
          },
        ],
      },
      {
        id: 31,
        name: "Triệt lông vùng lưng",
        image: sp21,
        price: 300000,
        description:"",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "Goi1/2",
            options: [
              {
                key: "Goi1/2",
                label: "Gói 1/2 lưng theo buổi",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
                
              },
              {
                key: "GoiFull",
                label: "Gói Full lưng theo buổi",
                priceChange: {
                  type: "fixed",
                  amount: +200000,
                },
              },
              {
                key: "Goi1/2 10",
                label: "Combo 1/2 lưng - 10 buổi",
                priceChange: {
                  type: "fixed",
                  amount: +2100000,
                },
              },
              {
                key: "GoiFull 10",
                label: "Gói Full lưng - 10 buổi",
                priceChange: {
                  type: "fixed",
                  amount: +4700000,
                },
              },
            ],
          },
        ],
      },
      {
        id: 32,
        name: "Triệt lông bikini",
        image: sp25,
        price: 350000,
        description:"",
        categoryId: ["Services"],
        variants:[
          {
            key: "size",
            label: "Gói",
            type: "single",
            default: "Goivien",
            options: [
              {
                key: "Goivien",
                label: "Gói viền bikini theo buổi",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
                
              },
              {
                key: "Goitruocsau",
                label: "Gói bikini(trước + sau) theo buổi",
                priceChange: {
                  type: "fixed",
                  amount: +150000,
                },
              },
              {
                key: "ComboVien10",
                label: "Combo viền bikini - 10 buổi",
                priceChange: {
                  type: "fixed",
                  amount: +2450000,
                },
              },
              {
                key: "ComboBikini10",
                label: "Gói bikini(trước + sau) - 10 buổi",
                priceChange: {
                  type: "fixed",
                  amount: +3250000,
                },
              },
            ],
          },
        ],
      },
      {
        id: 33,
        name: "Liệu trình trị nhức mỏi vai, gáy, cổ",
        price: 480000,
        image: lt1,
        description:"Sử dụng dịch vụ Spa trị liệu để chữa bệnh đau mỏi vai gáy đang được nhiều người lựa chọn thay thế cho việc dùng thuốc.",
        categoryId: ["Therapy"],
        variants: [
          {
            key: "size",
            label: "Thời gian của liệu trình",
            type: "single",
            default: "90p",
            options: [
              {
                key: "90p",
                label: "1 giờ 30 phút",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
            ],
          },
        ],
      },
      {
        id: 34,
        name: "Liệu trình làm giảm mỡ bụng",
        price: 480000,
        image: lt2,
        description:"Spa trị liệu giảm béo an toàn, giảm mỡ bụng siêu tốc, giảm béo toàn thân trong 5-10 ngày",
        categoryId: ["Therapy"],
        variants: [
          {
            key: "size",
            label: "Thời gian của liệu trình",
            type: "single",
            default: "120p",
            options: [
              {
                key: "120p",
                label: "2 giờ",
                priceChange: {
                  type: "percent",
                  percent: 0,
                },
              },
            ],
          },
        ],
      },
      {
        id: 35,
        name: "Combo 1 sức khoẻ nhỏ xinh - 320K",
        price: 320000,
        image: cba1,
        description:"Gồm 01 bộ tinh dầu 10 ml ( sả chanh, cam, trà trắng ).",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 36,
        name: "Combo 2 sức khoẻ nhỏ xinh - 450K",
        price: 450000,
        image: cba2,
        description:"Gồm 500 ml mật ong Daklak, 250 gr tinh bột nghệ và 30 ml tinh dầu sả chanh/ tinh dầu cam.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 37,
        name: "Combo 3 sức khoẻ nhỏ xinh - 500K",
        price: 500000,
        image: cba3,
        description:"Gồm 01 buổi massage mặt ngọc thạch, 50 gram bột thảo mộc dưỡng da và 01 tinh dầu cam 10ml.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 38,
        name: "Combo 4 sức khoẻ nhỏ xinh - 500K",
        price: 500000,
        image: cba4,
        description:"Gồm 01 buổi chăm sóc da mặt và 50 gram bột thảo mộc dưỡng da.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 39,
        name: "Combo 5 sức khoẻ nhỏ xinh - 500K",
        price: 450000,
        image: cba5,
        description:"Gồm 01 buổi gội đầu thảo dược cơ bản và 0l combo gội xả 300ml.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 40,
        name: "Combo 6 sức khoẻ nhỏ xinh - 500K",
        price: 500000,
        image: cba6,
        description:"Gồm 01 buổi massage trị liệu tự 500K chọn 60 phút, 02 chai tinh dầu 10ml (01 sả chanh, 01 cam).",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 41,
        name: "Combo 7 sức khoẻ nhỏ xinh - 500K",
        price: 500000,
        image: cba7,
        description:"Gồm 01 bộ chăm sóc tóc 300 ml (dầu gội, dầu xả, serum xịt tóc) và 01 tinh dầu 10 ml sả chanh / cam.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 42,
        name: "Combo 8 sức khoẻ nhỏ xinh - 500K",
        price: 500000,
        image: cba8,
        description:"Gồm 01 buổi chăm sóc da mặt và 50 gram bột thảo mộc dưỡng da.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 43,
        name: "Combo 1 sức khoẻ cao cấp - 600K",
        price: 600000,
        image: cbd1,
        description:"Gồm 01 buổi massage trị liệu tự chọn 60p + 1 gội đầu thảo dược chuyên sâu.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 44,
        name: "Combo 2 sức khoẻ cao cấp - 659K",
        price: 659000,
        image: cbd2,
        description:"Gồm 01 buổi massage trị liệu tự chọn 60p và 01 bộ tinh dầu 10 ml ( sả chanh, cam, trà trắng ).",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 45,
        name: "Combo 3 sức khoẻ cao cấp - 700K",
        price: 700000,
        image: cbd3,
        description:"Gồm 01 bộ chăm sóc tóc 300 ml (dầu gội, dầu xả, serum xịt tóc) và 01 tinh dầu 10 ml sả chanh / cam.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 46,
        name: "Combo 4 sức khoẻ cao cấp - 750K",
        price: 750000,
        image: cbd4,
        description:"Gồm 1000 ml mật ong 500 gr tinh bột nghệ và 01 bộ tinh dầu 10 ml ( sả chanh, cam, trà trắng ).",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 47,
        name: "Combo 1 sức khoẻ cao cấp - 1,1 triệu",
        price: 1100000,
        image: cbb1,
        description:"Gồm 01 buổi chăm sóc da chuyên sâu, 01 buổi gội dầu thảo dược chuyên sâu và 01 bộ chăm sóc tóc 300 ml ( dầu gội, dầu xả, serum xịt tóc ).",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 48,
        name: "Combo 2 sức khoẻ cao cấp - 1,1 triệu",
        price: 1100000,
        image: cbb2,
        description:"Gồm 01 buổi massage trị liệu tự chọn 60 phút và 01 bộ tinh dầu 30 ml ( sả chanh, cam, trà trắng ).",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 49,
        name: "Combo 3 sức khoẻ cao cấp - 1,2 triệu",
        price: 1200000,
        image: cbb3,
        description:"Gồm 03 buổi massage trị liệu tự chọn thời gian 60 phút.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 50,
        name: "Combo 4 sức khoẻ cao cấp - 1,2 triệu",
        price: 1200000,
        image: cbb4,
        description:"Gồm 02 buổi massage trị liệu tự chọn 60 phút và Ol buổi chăm sóc da chuyên sâu.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 51,
        name: "Combo 5 sức khoẻ cao cấp - 1,2 triệu",
        price: 1200000,
        image: cbb5,
        description:"Gồm 01 buổi chăm sóc da chuyên sâu, 01 buổi gội đầu thảo dược chuyên sâu và 1 bộ chăm sóc tóc 500 ml ( dầu gội. dầu xả, serum xịt tóc ).",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 52,
        name: "Combo 6 sức khoẻ cao cấp - 1,5 triệu",
        price: 1500000,
        image: cbb6,
        description:"Gồm 02 buổi massage trị liệu tự chọn 60 phút, 01 buổi chăm sóc da chuyên sâu và 01 buổi gội đầu thảo dược chuyên sâu.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 53,
        name: "Combo 7 sức khoẻ cao cấp - 1,6 triệu",
        price: 1600000,
        image: cbb7,
        description:"Gồm 01 buổi massage trị liệu tự chọn 60 phút, 01 bộ tinh dầu 30 ml, 01 mật ong nguyên chất 1000 ml và 500 gram tinh bột nghệ nguyên chất.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 54,
        name: "Combo 1 đồng hành - 2 triệu",
        price: 2000000,
        image: cbc1,
        description:"Gồm 10 buổi gội đầu thảo dược chuyên sâu 299.000đ/ buổi.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 55,
        name: "Combo 2 đồng hành - 3 triệu",
        price: 3000000,
        image: cbc2,
        description:"Gồm 10 bộ tinh dầu 10 ml ( sả chanh, cam, trà trắng ).",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 56,
        name: "Combo 3 đồng hành - 3,5 triệu",
        price: 3500000,
        image: cbc3,
        description:"Gồm 10 set 1000 ml mật ong nguyên chất và 250 gram tinh bột nghệ.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 57,
        name: "Combo 4 đồng hành - 3,5 triệu",
        price: 3500000,
        image: cbc4,
        description:"Gồm 10 buổi massage tự chọn, thời gian 60 phút.",
        categoryId: ["Combo"],
        variants: [],
      },
      {
        id: 58,
        name: "Combo 5 đồng hành - 4,4 triệu",
        price: 4400000,
        image: cbc5,
        description:"Gồm 10 buổi chăm sóc da chuyên sâu",
        categoryId: ["Combo"],
        variants: [],
      },
    ];
  },
});



export const recommendProductsState = selector<Product[]>({
  key: "recommendProducts",
  get: ({ get }) => {
    const products = get(productsState);
    return products.filter((p) => p.sale);
  },
});



export const selectedCategoryIdState = atom({
  key: "selectedCategoryId",
  default: "",
});

export const productsByCategoryState = selectorFamily<Product[], CategoryId>({
  key: "productsByCategory",
  get:
    (categoryId) =>
    ({ get }) => {
      const allProducts = get(productsState);
      return allProducts.filter((product) =>
        product.categoryId.includes(categoryId)
      );
    },
});


export const cartState = atom<Cart>({
  key: "cart",
  default: [],
});

export const totalQuantityState = selector({
  key: "totalQuantity",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
});

export const totalPriceState = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce(
      (total, item) =>
        total + item.quantity * calcFinalPrice(item.product, item.options),
      0
    );
  },
});

export const notificationsState = atom<Notification[]>({
  key: "notifications",
  default: [
    {
      id: 1,
      image: logo,
      title: "Chào bạn mới",
      content:
        "The Libra House cảm ơn bạn đã truy cập và sử dụng dịch vụ của chúng tôi !!! Hãy liên hệ với chúng tôi để nhận nhiều ưu đãi hấp dẫn !!!",
    },

  ],
});

export const keywordState = atom({
  key: "keyword",
  default: "",
});

export const resultState = selector<Product[]>({
  key: "result",
  get: async ({ get }) => {
    const keyword = get(keywordState);
    if (!keyword.trim()) {
      return [];
    }
    const products = get(productsState);
    await wait(500);
    return products.filter((product) =>
      product.name.trim().toLowerCase().includes(keyword.trim().toLowerCase())
    );
  },
});

export const selectedDeliveryTimeState = atom({
  key: "selectedDeliveryTime",
  default: +new Date(),
});

export const requestLocationTriesState = atom({
  key: "requestLocationTries",
  default: 0,
});

export const requestPhoneTriesState = atom({
  key: "requestPhoneTries",
  default: 0,
});

export const phoneState = selector<string | boolean>({
  key: "phone",
  get: async ({ get }) => {
    const requested = get(requestPhoneTriesState);
    if (requested) {
      const { number, token } = await getPhoneNumber({ fail: console.warn });
      if (number) {
        return number;
      }
      console.warn(
        "Sử dụng token này để truy xuất số điện thoại của người dùng",
        token
      );
      console.warn(
        "Chi tiết tham khảo: ",
        "https://mini.zalo.me/blog/thong-bao-thay-doi-luong-truy-xuat-thong-tin-nguoi-dung-tren-zalo-mini-app"
      );
      console.warn("Giả lập số điện thoại mặc định: 0337076898");
      return "0337076898";
    }
    return false;
  },
});



