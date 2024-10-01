"use client";

import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";
import React from "react";

type RadioOptionsType = {
  options: string[];
  name: string;
  defaultValue?: string;
  onChange: (nextValue: string) => void;
};

function RadioOptions({
  options,
  name,
  defaultValue,
  onChange,
}: RadioOptionsType) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange: onChange,
  });

  const group = getRootProps();
  return (
    <HStack
      {...group}
      w="full"
      spacing="4"
      flexWrap={{ base: "wrap", lg: "nowrap" }}
    >
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" w="full" textAlign="center">
      <input {...input} />
      <Box
        {...checkbox}
        w="full"
        cursor="pointer"
        rounded="3px"
        fontWeight="semibold"
        boxShadow="none"
        color="steel-blue"
        bg="white"
        _checked={{
          bg: "sky-blue",
          color: "white",
          borderColor: "teal.600",
        }}
        _active={{
          boxShadow: "none",
        }}
        px={5}
        py="2.5"
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default RadioOptions;
