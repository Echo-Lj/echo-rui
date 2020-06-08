import React from "react";
import "./styles/index.scss";
import Button from "./components/Button/button";
// import Alert, { AlertType } from "./components/Alert/alert";
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Button, null, "hello"),
        React.createElement(Button, { disabled: true }, "hello"),
        React.createElement(Button, { btnType: "primary", size: "sm" }, "hello"),
        React.createElement(Button, { btnType: "danger", size: "lg", onClick: function () {
                alert(111);
            } }, "hello"),
        React.createElement(Button, { btnType: "link", href: "http://www.baidu.com", target: "_blank" }, "hello"),
        React.createElement(Button, { disabled: true, btnType: "link", href: "http://www.baidu.com" }, "hello")));
}
export default App;
