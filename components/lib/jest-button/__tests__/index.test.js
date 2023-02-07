import rdButton from "../index";
import { mount } from "@vue/test-utils";
import mountTest from "../../../../tests/shared/mountTest";

describe("Button", () => {
  mountTest(rdButton);
  it("测试渲染是否正确", () => {
    const wrapper = mount({
      render() {
        return <rdButton>Follow</rdButton>;
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("create primary button", () => {
    const wrapper = mount({
      render() {
        return <rdButton type="primary">按钮</rdButton>;
      },
    });
    expect(wrapper.find(".type-primary").exists()).toBe(true); // 类名选择器
  });
});
