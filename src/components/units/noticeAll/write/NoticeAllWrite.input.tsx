import styled from "@emotion/styled";
import { KeyboardEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export const Input = styled.input`
  padding: 12px 16px;
  width: 445px;
  height: 46px;
  border: 2px solid #dadada;
  border-radius: 10px;
  color: #676767;
  font-size: 14px;
  font-weight: 700;
  outline-color: #676767;
  ::placeholder {color: #dbdbdb;}

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
