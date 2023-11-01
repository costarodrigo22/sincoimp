import { InputLogin } from "../../layouts/BaseInput";
import userIcon from "../../../assets/Icons/user_icon.svg";
import { forwardRef, ComponentProps } from "react";

interface InputLoginProps extends ComponentProps<"input"> {}

const IconUser = () => {
  return <img src={userIcon} />;
};

export const Input = forwardRef<HTMLInputElement, InputLoginProps>(
  ({ placeholder, ...props }, ref) => {
    return (
      <InputLogin.Wrapper
        {...props}
        ref={ref}
        placeholder={placeholder}
        name="teste"
      >
        <InputLogin.Icon icon={IconUser} />
        <InputLogin.Separator />
      </InputLogin.Wrapper>
    );
  }
);
