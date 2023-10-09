import React, { FC, HTMLProps, PropsWithChildren } from "react";
import { Box, Text } from "zmp-ui";
import { BodyTextProps } from "zmp-ui/text";

export const TextSkeleton: FC<PropsWithChildren<BodyTextProps>> = ({
  className,
  ...props
}) => {
  return (
    <Text
      {...props}
      className={`bg-skeleton text-transparent w-fit h-fit animate-pulse ${
        className ?? ""
      }`}
    />
  );
};

export const ImageSkeleton: FC<HTMLProps<HTMLImageElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`bg-skeleton animate-pulse ${className ?? ""}`}
    />
  );
};

export const ProductItemSkeleton: FC = () => {
  return (
    <div className="space-y-2">
      <ImageSkeleton className="w-full aspect-square rounded-lg" />
      <TextSkeleton></TextSkeleton>
      <TextSkeleton size="xxSmall"></TextSkeleton>
    </div>
  );
};

export const ProductSlideSkeleton: FC = () => {
  return (
    <div className="space-y-3">
      <ImageSkeleton className="w-full aspect-video rounded-lg" />
      <Box className="space-y-1">
        <TextSkeleton size="small"></TextSkeleton>
        <TextSkeleton size="xxSmall"></TextSkeleton>
        <TextSkeleton size="large"></TextSkeleton>
      </Box>
    </div>
  );
};

export const ProductSearchResultSkeleton: FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <ImageSkeleton className="w-[88px] h-[88px] rounded-lg" />
      <Box className="space-y-2">
        <TextSkeleton></TextSkeleton>
        <TextSkeleton size="xSmall"></TextSkeleton>
      </Box>
    </div>
  );
};

export const ServicesItemSkeleton: FC = () => {
  return (
    <div className="space-y-2">
      <ImageSkeleton className="w-full aspect-square rounded-lg" />
      <TextSkeleton></TextSkeleton>
      <TextSkeleton size="xxSmall"></TextSkeleton>
    </div>
  );
};

export const ServicesSlideSkeleton: FC = () => {
  return (
    <div className="space-y-3">
      <ImageSkeleton className="w-full aspect-video rounded-lg" />
      <Box className="space-y-1">
        <TextSkeleton size="small"></TextSkeleton>
        <TextSkeleton size="xxSmall"></TextSkeleton>
        <TextSkeleton size="large"></TextSkeleton>
      </Box>
    </div>
  );
};

export const ServicesSearchResultSkeleton: FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <ImageSkeleton className="w-[88px] h-[88px] rounded-lg" />
      <Box className="space-y-2">
        <TextSkeleton></TextSkeleton>
        <TextSkeleton size="xSmall"></TextSkeleton>
      </Box>
    </div>
  );
};
