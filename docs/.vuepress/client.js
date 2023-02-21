import { defineClientConfig } from '@vuepress/client'
import button from "./examples/button.vue";
export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.component(button.name,button)
    },
    setup() {},
    rootComponents: [],
})