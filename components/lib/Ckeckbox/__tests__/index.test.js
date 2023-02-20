import { mount, shallowMount } from "@vue/test-utils";
import checkbox from '../src/Checkbox.vue';

describe('rd-checkbox test', () => {
    it('test checkbox render', () => {
        const wrapper = mount(checkbox);
        expect(wrapper.props('disabled')).toBe(false);
        expect(wrapper.props('border')).toBe(false);
        expect(wrapper.props('inderterminate')).toBe(false);
        expect(wrapper.props('size')).toBe("");
    });

    it('test checkbox props', () => {
        const wrapper = mount(checkbox, {
            props: {
                label: "选项一",
                size: "small",
                border: true
            }
        });
        expect(wrapper.find(".is-border").exists()).toBe(true);
        expect(wrapper.find(".rd-checkbox-small").exists()).toBe(true);
        expect(wrapper.find("span.rd-checkbox-label").text()).toEqual("选项一")
    });
    
    it('test checkbox props disable', () => {
        const wrapper = mount(checkbox, {
            props: {
                disabled: true
            }
        });
        expect(wrapper.find(".is-disabled").exists()).toBe(true);
    })
    
})