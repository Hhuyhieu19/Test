import { ElasticTextarea } from "components/elastic-textarea";
import { ListRenderer } from "components/list-renderer";
import React, { FC, useRef, useEffect, useState } from "react";
import { Box, Icon, Input, Text, useSnackbar } from "zmp-ui";
import { useRecoilState, useRecoilValue } from 'recoil';
import { formDataState } from "../../utils/formState";
import { validationFunctions } from "utils/validation";

export const Delivery: FC = () => {
  const [formData, setFormData] = useRecoilState(formDataState);
  const { openSnackbar, closeSnackbar } = useSnackbar();
  const timemerId = useRef<number | null>(null);
  const { isValidEmail, isValidPhone } = useRecoilValue(validationFunctions);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputBlur = (name: string) => {
    if (name === "phone" && formData.phone && !isValidPhone(formData.phone)) {
      openSnackbar({
        text: "Số điện thoại không hợp lệ ! Vui lòng nhập lại !!!",
        type: "error",
        position: "bottom",
      });
    }
  
    if (name === "email" && formData.email && !isValidEmail(formData.email)) {
      openSnackbar({
        text: "Email không hợp lệ ! Vui lòng nhập lại !!!",
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
    <Box className="space-y-3 px-4">
      <ListRenderer
        items={[
          {
            left: <Icon icon="zi-user-circle" className="my-auto" />,
            right: (
              <Box flex>
                <ElasticTextarea
                  placeholder="Họ và tên..."
                  className="border-none px-0 w-full focus:outline-none"
                  maxRows={4}
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", (e.target as HTMLTextAreaElement).value)}
                />
              </Box>
            ),
          },
          {
            left: <Icon icon="zi-call" className="my-auto" />,
            right: (
              <Box flex>
                <ElasticTextarea
                  placeholder="Số điện thoại..."
                  className="border-none px-0 w-full focus:outline-none"
                  maxRows={4}
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", (e.target as HTMLTextAreaElement).value)}
                  onBlur={() => handleInputBlur("phone")}
                />
              </Box>
            ),
          },
          {
            left: <Icon icon="zi-at" className="my-auto" />,
            right: (
              <Box flex>
                <ElasticTextarea
                  placeholder="Email..."
                  className="border-none px-0 w-full focus:outline-none"
                  maxRows={4}
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", (e.target as HTMLTextAreaElement).value)}
                  onBlur={() => handleInputBlur("email")}
                />
              </Box>
            ),
          },
          {
            left: <Icon icon="zi-note" className="my-auto" />,
            right: (
              <Box flex>
                <ElasticTextarea
                  placeholder="Ghi chú..."
                  className="border-none px-0 w-full focus:outline-none"
                  maxRows={4}
                  value={formData.note}
                  onChange={(e) => handleInputChange("note", (e.target as HTMLTextAreaElement).value)}
                />
              </Box>
            ),
          },
        ]}
        limit={4}
        renderLeft={(item) => item.left}
        renderRight={(item) => item.right}
      />
    </Box>
  );
};
