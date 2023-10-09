import React, { FC } from "react";
import { Variant } from "types/product";
import { Box, Radio, Text } from "zmp-ui";

export const SingleOptionPicker: FC<{
  variant: Variant;
  value: string;
  onChange: (value: string) => void;
}> = ({ variant, value, onChange }) => {
  return (
    <Box my={8} className="space-y-2">
      <Text.Title size="small">{variant.label}</Text.Title>
      <Radio.Group 
        className="grid grid-cols-1 gap-3"
        name={variant.key}
        options={variant.options.map((option) => ({
          value: option.key,
          label: option.label,
        }))}
        value={value}
        onChange={(selectedOption: string) => {
          onChange(selectedOption);
        }}
      />
    </Box>
  );
};
