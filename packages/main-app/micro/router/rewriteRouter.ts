import { turnApp } from "./routerHandle";
import { patchRouter } from "./../utils/index";
export default () => {
  // 重写window的路由跳转
  window.history.replaceState = patchRouter(
    window.history.replaceState,
    "micro_replace"
  );
  window.history.pushState = patchRouter(
    window.history.pushState,
    "micro_push"
  );

  window.addEventListener("micro_replace", turnApp);
  window.addEventListener("micro_push", turnApp);
  window.onpopstate = turnApp;
};