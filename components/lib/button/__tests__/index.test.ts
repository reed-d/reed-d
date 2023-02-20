import { mount } from "@vue/test-utils";
import rdButton from "../index";
import { h } from "vue";
describe('test rd-button',() => {
    it('test props',() => {
        const wrapper = mount(rdButton,{
            props:{
                type: 'primary',
                shape: 'round',
                loading: true,
                block: true,
                size: 'small',
                danger: true,
                disabled: false
            }
        })
        expect(wrapper.props()).toEqual({
            type: 'primary',
                shape: 'round',
                loading: true,
                block: true,
                size: 'small',
                danger: true,
                disabled: false 
        })
    })
    it('test slots',() => {
        const wrapper = mount(rdButton,{
            slots:{
                'icon-left':h('span','😀'),
                'icon-right':h('span','A')
            }
        })
        expect(wrapper.html()).toContain('😀')
        expect(wrapper.html()).toContain('A')
    })
})