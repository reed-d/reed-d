import { App } from "vue";
import RdSelect from "./select/main.vue";
import RdBreadcrumb from "./breadcrumb/src/breadcrumb.vue";
import RdBreadcrumbItem from "./breadcrumb/src/breadcrumb-item.vue";
import RdChenckbox from "./Ckeckbox/src/Checkbox.vue";
import RdCheckboxGroup from "./Ckeckbox/src/CheckboxGroup.vue";
import rdAvatar from "./avatar/index";
import rdTable from "./table/index";
import rdSelect from "./select/src/main.vue";
import rdButton from "./button/index";
const components = [
  RdSelect,
  RdBreadcrumb,
  RdBreadcrumbItem,
  RdChenckbox,
  RdCheckboxGroup,
  rdAvatar,
  rdTable,
  rdSelect,
  rdButton
];



const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};

export {
  RdSelect,
  RdBreadcrumb,
  RdBreadcrumbItem,
  RdChenckbox,
  RdCheckboxGroup,
  rdAvatar,
  rdTable,
  rdSelect,
  rdButton};


export default {
  install,
};
