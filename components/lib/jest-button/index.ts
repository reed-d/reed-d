import { App } from "vue";
import rdButton from "./src/main.vue";
rdButton.install = (app: App): void => {
  app.component(rdButton.name, rdButton);
};
export default rdButton;
