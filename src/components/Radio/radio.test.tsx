import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Radio from "./radio";

describe("Radio 组件", () => {
  it('should render correctly', () => {
    const wrapper = render(<Radio className="customized">Test</Radio>);
    expect(wrapper).toMatchSnapshot();
  });

  it("测试禁用的情况", () => {
    const  onClick = jest.fn();

    const wrapper = render(<Radio onClick={onClick} disabled={true}>Disabled</Radio>);
    const element = wrapper.getByText("Disabled") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    expect(onClick).not.toHaveBeenCalled();
  });
});