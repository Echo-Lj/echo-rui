import { FC } from "react";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
export declare type theme = "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark";
export interface IconProps extends FontAwesomeIconProps {
    /** 主题颜色 */
    theme?: theme;
}
export declare const Icon: FC<IconProps>;
export default Icon;
