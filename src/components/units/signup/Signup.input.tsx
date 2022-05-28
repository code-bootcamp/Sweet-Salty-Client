import styled from "@emotion/styled";
import { ChangeEventHandler, KeyboardEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export const Input = styled.input`
  padding: 10px;
  width: 350px;
  height: 40px;
  background: #fff;
  border: 2px solid #DADADA;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #2c2c2c;
  outline: none;
  ::placeholder {
    color: #D2D2D2;
  }
`;

interface IProps {
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string | undefined;
  defaultValue?: string;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement> | undefined;
  type: "text" | "password";
  register?: UseFormRegisterReturn;
}

export default function SignupInput(props: IProps) {
  return (
    <Input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue || ""}
      onKeyUp={props.onKeyUp}
      onChange={props.onChange}
    />
  );
}
