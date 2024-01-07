import React from "react";
import {
  Button as MtButton,
  ButtonProps as MtButtonProps,
} from "@mantine/core";

type ButtonProps = {
  children: React.ReactNode;
} & MtButtonProps;

export function Button({ children }: ButtonProps) {
  return <MtButton>{children}</MtButton>;
}
