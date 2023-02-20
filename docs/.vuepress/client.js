import { defineClientConfig } from '@vuepress/client'
import buttonl from "./components/buttonl.vue";
export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.component(buttonl.name, buttonl)
    },
    setup() {},
    rootComponents: [],
})
