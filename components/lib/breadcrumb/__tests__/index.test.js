import { mount, shallowMount } from "@vue/test-utils";
import RdBreadcrumbItem from '../src/breadcrumb-item.vue'
import RdBreadcrumb from '../src/breadcrumb.vue'

const $route = {
    path: '/home'
}

describe('rd-breadcrumb component test', () => {
    it('render', () => {
        const wrapper = mount({
            render() {
                return <RdBreadcrumb></RdBreadcrumb>
            }
        });
        expect(wrapper.find(".rd-breadcrumb").exists()).toBe(true);
    });
    it('test breadcrumb-item props to', () => {
        
        const wrapper = mount(RdBreadcrumbItem, {
            props: {
                to: { path: '/' }
            }
        })
        expect(wrapper.props('to')).toEqual({ path: '/' });
    });
    it('test breadcrumb-item props replace', () => {
        const wrapper = mount({
            render() {
                return <RdBreadcrumbItem to="{path:'/'}" ref="link"></RdBreadcrumbItem>
        }}, {
            props: {
                replace:true
            }
        })
        expect(wrapper.props('replace')).toBe(undefined)
    })
})