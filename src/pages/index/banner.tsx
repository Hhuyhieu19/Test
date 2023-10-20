import React, { FC } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "zmp-ui";

import bn1 from "static/banner-1.jpg";
import bn2 from "static/banner-2.jpg";
import bn3 from "static/banner-3.jpg";
import bn4 from "static/banner-4.jpg";

export const Banner: FC = () => {
  const banners = [bn1, bn2, bn3, bn4];

  return (
    <Box className="bg-white" pb={4}>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2000 }}
        loop
        cssMode
      >
        {banners.map((image, index) => (
          <SwiperSlide key={index} className="px-4">
            <Box
              className="w-full rounded-lg aspect-[2/1] bg-cover bg-center bg-skeleton"
              style={{
                backgroundImage: `url(${image})`, // Sử dụng đường dẫn tương đối
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
