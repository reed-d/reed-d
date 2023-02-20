import { App } from "vue";
import rdButton from "../button/src/main.vue";
rdButton.install = (app: App): void => {
  app.component(rdButton.name, rdButton);
};
export default rdButton;
