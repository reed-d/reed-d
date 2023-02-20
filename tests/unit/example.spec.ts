import { shallowMount } from "@vue/test-utils";
import  rdButton  from "../../components/lib/button";

describe("HelloWorld.vue", () => {
  it("renders props.btnType when passed", () => {
    const type = "default";
    const wrapper = shallowMount(rdButton, {
      props: { type },
    });
    expect(wrapper.props().type).toBe("default");
  });
});
