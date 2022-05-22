import styled from "@emotion/styled";
import { KeyboardEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export const Input = styled.input`
  
box-sizing: border-box;
border-radius: 5px;
 
`;

interface IProps {
  placeholder?: string | undefined;
  defaultValue?: string;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement> | undefined;
  type: "text" | "password";
  register?: UseFormRegisterReturn;
}

export default function WriteReviewInput(props: IProps) {
  return (
    <Input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue || ""}
      onKeyUp={props.onKeyUp}
    />
  );
}
