import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
export declare type ButtonSize = "lg" | "sm";
export declare type ButtonType = "primary" | "default" | "danger" | "link";
interface BaseButtonProps {
    /** 自定义类名 */
    className?: string;
    /** 设置Button 的禁用 */
    disabled?: boolean;
    /** 设置Button 的大小 */
    size?: ButtonSize;
    /** 设置Button 的类型 */
    btnType?: ButtonType;
    children: React.ReactNode;
    /** 当btnType为link时，必填 */
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export declare const Button: FC<ButtonProps>;
export default Button;
