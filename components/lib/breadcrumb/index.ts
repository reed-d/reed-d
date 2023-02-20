import { App } from "vue";
import RdBreadcrumb from "./src/breadcrumb.vue";
import RdBreadcrumbItem from "./src/breadcrumb-item.vue";

RdBreadcrumb.install = (app: App) => {
  app.component(RdBreadcrumb.name, RdBreadcrumb);
};

RdBreadcrumbItem.install = (app: App) => {
  app.component(RdBreadcrumbItem.name, RdBreadcrumbItem);
};

export default { RdBreadcrumbItem, RdBreadcrumb };
