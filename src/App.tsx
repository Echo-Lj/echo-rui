import React from "react";
import "./styles/index.scss";
import Button from "./components/Button/button";
import Icon from "./components/Icon/icon";
import Radio from "./components/Radio/radio";
// import Alert, { AlertType } from "./components/Alert/alert";
function App() {
  return (
    <div className="App">
      {/**<div style={{ marginTop: "20px" }}>
        <Alert
          type={AlertType.Success}
          message="alert 提示语"
          onClose={() => {
            console.log(111);
          }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Alert type={AlertType.Warning} message="alert 提示语" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Alert type={AlertType.Info} message="alert 提示语" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Alert type={AlertType.Error} closable={false} message="alert 提示语" />
      </div>**/}
      
      <Radio name="111">Radio</Radio>

      <Radio name="111" prefixCls="text" disabled={true}>Radio2</Radio>
      <Icon icon="coffee" size="5x" theme="danger" />
      <Icon icon="arrow-down" size="5x" />
      <Button>hello</Button>
      <Button disabled>hello</Button>
      <Button btnType="primary" size="sm">
        hello
      </Button>
      <Button
        btnType="danger"
        size="lg"
        onClick={() => {
          alert(111);
        }}
      >
        hello
      </Button>
      <Button
        btnType="link"
        href="http://www.baidu.com"
        target="_blank"
      >
        hello
      </Button>
      <Button disabled btnType="link" href="http://www.baidu.com">
        hello
      </Button>
    </div>
  );
}

export default App;
