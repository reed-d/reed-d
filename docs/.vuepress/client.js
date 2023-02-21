import { defineClientConfig } from '@vuepress/client'
import rdSelect from "../../components/lib/select/src/main.vue";
import rdButton from "../../components/lib/button/src/main.vue";
import rdAvatar from "../../components/lib/avatar/src/main.vue";
import rdTable from "../../components/lib/table/src/main.vue";
import rdTabs from  "../../components/lib/tabs/main.vue";
import rdBreadcrumb from "../../components/lib/breadcrumb/src/breadcrumb.vue"
import rdCheckbox from "../../components/lib/Ckeckbox/src/Checkbox.vue"
const components = [rdButton,rdAvatar,rdTable,rdTabs,rdSelect,rdBreadcrumb,rdCheckbox]

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    components.map((item) =>{
      app.component(item.name,item)
    })
  },
  setup() { },
  rootComponents: [],
})
