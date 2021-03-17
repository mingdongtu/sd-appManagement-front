import {
  // Button,
  Form
} from "ant-design-vue";
const ant = {
  install (Vue) {
    // Vue.component(Button.name, Button);
    Vue.component(Form.name, Form);
  },
};
export default ant;