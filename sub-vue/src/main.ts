import { createApp } from "vue";
import App from "./App.vue";

const render = () => {
  createApp(App).mount("#root");
};

// 环境判断
if (!(window as any).__MICRO__) {
  render();
}

export const bootstrap = async () => {
  console.log("bootstrap");
};

export const mount = async () => {
  render();
};

export const unmount = async () => {
  console.log("unmount");
};
