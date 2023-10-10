import { DisplayPrice } from "components/display/price";
import React, { FC, useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState, totalPriceState, totalQuantityState } from "state";
import { Box, Button, Text, useSnackbar } from "zmp-ui";
import { formDataState } from "../../utils/formState";
import { useNavigate } from "react-router-dom";
import { validationFunctions } from "utils/validation";
import { formatDate, formatTime } from "utils/date";

export const CartPreview: FC = () => {
  const quantity = useRecoilValue(totalQuantityState);
  const totalPrice = useRecoilValue(totalPriceState);
  const formData = useRecoilValue(formDataState);
  const cart = useRecoilValue(cartState);
  const setCart = useSetRecoilState(cartState);
  const navigate = useNavigate();
  const setFormData = useSetRecoilState(formDataState);
  const { isValidPhone, isValidEmail } = useRecoilValue(validationFunctions)
  const roundedTotalPrice = Math.round(totalPrice);

  
  const { openSnackbar, closeSnackbar } = useSnackbar();
  const timemerId = useRef<number | null>(null);

  const isFormDataComplete = (data: typeof formData) => {
    return data.name && isValidPhone(data.phone) && isValidEmail(data.email); // Ghi chú có thể không bắt buộc
  };
  

  const handleSendOrder = async () => {

    
    // Định dạng ngày và giờ trước khi gửi dữ liệu
    const formattedCart = cart.map(item => {
      if (item.selectedDate && item.selectedTime) {
        return {
          ...item,
          selectedDate: formatDate(new Date(item.selectedDate)),
          selectedTime: formatTime(new Date(item.selectedTime))
        };
      }
      return item;
    });
    
    if (!isFormDataComplete(formData)) {
      openSnackbar({
        text: "Vui lòng nhập đúng và đầy đủ thông tin trước khi gửi đơn hàng.",
        type: "error",
        position: "bottom",
      });
      return;
    }

    try {
      const API_URL = 'https://vn1.n8n.vn/webhook/zalo-2109';
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb3JtRGF0YSI6eyJuYW1lIjoiVsWpIEh1eSBIaeG7h3UiLCJwaG9uZSI6IjAzMjc5MjAwNjEiLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJub3RlIjoixJFzZHNkc2QifSwiY2FydCI6W3sicHJvZHVjdCI6eyJpZCI6MTAsIm5hbWUiOiJNYXNzYWdlIHRy4buLIGxp4buHdSBj4buVIHZhaSBnw6F5IiwiaW1hZ2UiOiIvc3JjL3N0YXRpYy9uYjEuanBnIiwicHJpY2UiOjU0OTAwMCwic2FsZSI6eyJ0eXBlIjoiZml4ZWQiLCJhbW91bnQiOjEwMDAwMH0sImRlc2NyaXB0aW9uIjoiU-G7rSBk4bulbmcgZOG7i2NoIHbhu6UgU3BhIHRy4buLIGxp4buHdSDEkeG7gyBjaOG7r2EgYuG7h25oIMSRYXUgbeG7j2kgdmFpIGfDoXkgxJFhbmcgxJHGsOG7o2Mgbmhp4buBdSBuZ8aw4budaSBs4buxYSBjaOG7jW4gdGhheSB0aOG6vyBjaG8gdmnhu4djIGTDuW5nIHRodeG7kWMuKDQ0OS4wMDBWTkQvNjBtaW5zIC0gNjcwLjAwMFZORC85MG1pbnMpIiwiY2F0ZWdvcnlJZCI6WyJTZXJ2aWNlcyJdLCJ2YXJpYW50cyI6W3sia2V5Ijoic2l6ZSIsImxhYmVsIjoiR8OzaSIsInR5cGUiOiJzaW5nbGUiLCJkZWZhdWx0IjoiMCIsIm9wdGlvbnMiOlt7ImtleSI6InMiLCJsYWJlbCI6IjYwIHBow7p0IiwicHJpY2VDaGFuZ2UiOnsidHlwZSI6InBlcmNlbnQiLCJwZXJjZW50IjowfX0seyJrZXkiOiJtIiwibGFiZWwiOiI5MCBwaMO6dCIsInByaWNlQ2hhbmdlIjp7InR5cGUiOiJmaXhlZCIsImFtb3VudCI6MjIxMDAwfX1dfV19LCJvcHRpb25zIjp7InNpemUiOiJtIn0sInF1YW50aXR5IjoxfV0sInRvdGFsUHJpY2UiOjY3MDAwMH0.pAkRHmt5PtHzOfqS5C1UPhGiS95yvBVMCA-yxWS7Fyg'
        },
        body: JSON.stringify({
          formData,
          cart: formattedCart,
          totalPrice: roundedTotalPrice,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log('Order sent successfully');
      openSnackbar({
        text: "Đơn hàng đã được gửi thành công",
        type: "success",
        position: "bottom",
      });

      setTimeout(() => {
        setCart([]);
        setFormData({
          name: '',
          phone: '',
          email: '',
          note: ''
        });
        navigate('/');
      }, 2000);

    } catch (error) {
      console.error('Error sending order:', error);
      openSnackbar({
        text: "Có lỗi xảy ra khi gửi đơn hàng. Vui lòng thử lại.",
        type: "error",
        position: "bottom",
      });
    }
  };

  useEffect(() => {
    return () => {
      closeSnackbar();
      if (timemerId.current !== null) {
        clearInterval(timemerId.current);
      }
    };
  }, []);

  return (
    <Box flex className="sticky bottom-0 bg-background p-4 space-x-4">
      <Box
        flex
        flexDirection="column"
        justifyContent="space-between"
        className="min-w-[120px] flex-none"
      >
        <Text className="text-gray" size="xSmall">
          {quantity} sản phẩm
        </Text>
        <Text.Title size="large">
          <DisplayPrice>{totalPrice}</DisplayPrice>
        </Text.Title>
      </Box>
      <Button
        type="highlight"
        disabled={!quantity || !isFormDataComplete}
        fullWidth
        onClick={handleSendOrder}
      >
        Gửi đơn hàng
      </Button>
    </Box>
  );
};
