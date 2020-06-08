import React, { useCallback, useState } from "react";
import classnames from "classnames";
export var AlertType;
(function (AlertType) {
    AlertType["Success"] = "success";
    AlertType["Info"] = "info";
    AlertType["Warning"] = "warning";
    AlertType["Error"] = "error";
})(AlertType || (AlertType = {}));
var Alert = function (props) {
    var _a;
    var message = props.message, type = props.type, closable = props.closable, onClose = props.onClose, title = props.title;
    var classes = classnames("echo-alert", (_a = {},
        _a["echo-alert-" + type] = type,
        _a));
    var OnClose = useCallback(function () {
        setShow(false);
        if (onClose) {
            onClose();
        }
    }, [onClose]);
    var _b = useState(true), show = _b[0], setShow = _b[1];
    if (show) {
        return (React.createElement("div", { className: classes, "data-testid": "alert" },
            title ? React.createElement("h6", { className: "echo-alert-title" }, title) : null,
            React.createElement("p", { className: "echo-alert-message" }, message),
            closable ? (React.createElement("span", { className: "echo-alert-close", onClick: OnClose, "data-testid": "close" }, "x")) : null));
    }
    else {
        return null;
    }
};
Alert.defaultProps = {
    type: AlertType.Success,
    closable: true,
};
export default Alert;
