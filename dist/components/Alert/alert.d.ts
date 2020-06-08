import React from "react";
export declare enum AlertType {
    Success = "success",
    Info = "info",
    Warning = "warning",
    Error = "error"
}
export interface AlertProps {
    message: string;
    type?: AlertType;
    closable?: boolean;
    onClose?: Function;
    title?: string;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
