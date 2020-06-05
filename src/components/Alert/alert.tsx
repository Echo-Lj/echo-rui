import React, { useCallback, useState } from "react";
import classnames from "classnames";

export enum AlertType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
}

export interface AlertProps {
  message: string;
  type?: AlertType;
  closable?: boolean;
  onClose?: Function;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { message, type, closable, onClose } = props;
  const classes = classnames("echo-alert", {
    [`echo-alert-${type}`]: type,
  });
  const OnClose = useCallback(() => {
    setShow(false);
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <div className={classes}>
        <p className="echo-alert-message">{message}</p>
        {closable ? (
          <span className="echo-alert-close" onClick={OnClose}>
            x
          </span>
        ) : null}
      </div>
    );
  } else {
    return null;
  }
}
Alert.defaultProps = {
  type: AlertType.Success,
  closable: true,
};

export default Alert;