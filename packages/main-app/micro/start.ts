import { currentApp } from "./utils/index";
import rewriteRouter from "./router/rewriteRouter";
import { setList, getList } from "./const/appList";
// 实现路由拦截
rewriteRouter();
// 注册子应用
export const registerMicroApps = appList => {
  console.log(appList);
  setList(appList);
};

// 启动微前端框架
export const start = () => {
  const apps = getList();
  // 没有注册的子应用
  if (!apps.length) {
    throw Error("子应用列表为空，请正确注册");
  }

  //有子应用，查找到符合当前路由的子应用
  const app:any = currentApp();
  console.log(app);
  if (app) {
    const { pathname, hash } = window.location;
    const url = pathname + hash;
    window.history.pushState("", "", url);
    (window as any).__CURRENT__SUB__APP__ = app.activeRule;
  }
};
