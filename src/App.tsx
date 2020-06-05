import React from "react";
import "./styles/index.scss";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <Button>hello</Button>
      <Button disabled>hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        hello
      </Button>
      <Button
        btnType={ButtonType.Danger}
        size={ButtonSize.Large}
        onClick={() => {
          alert(111);
        }}
      >
        hello
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="http://www.baidu.com"
        target="_blank"
      >
        hello
      </Button>
      <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">
        hello
      </Button>
    </div>
  );
}

export default App;
