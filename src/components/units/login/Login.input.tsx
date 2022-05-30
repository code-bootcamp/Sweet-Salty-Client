import styled from "@emotion/styled";
import { KeyboardEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export const Input = styled.input`
  width: 350px;
  height: 40px;
  background: #fff;
  border: 2px solid #DADADA;
  border-radius: 10px;
  padding: 10px 9px;
  font-size: 14px;
  outline: none;
  color: #2C2C2C;
  font-weight: 600;
  ::placeholder {
    color: #D2D2D2;
  }
`;

interface IProps {
  placeholder?: string | undefined;
  defaultValue?: string;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement> | undefined;
  type: "text" | "password";
  register?: UseFormRegisterReturn;
}

export default function LoginInput(props: IProps) {
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
