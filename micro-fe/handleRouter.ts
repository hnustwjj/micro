import { getApps } from "./";
import importHtml from "./importHtml";

// 处理路由变化
export default async function () {
  // 2:匹配子应用
  const activeApp = matchActiveApp();
  if (!activeApp) {
    return;
  }

  // 3:加载子应用
  const { template, execScript } = await importHtml(activeApp.entry);
  const container = document.querySelector(activeApp.container);
  if (container) {
    container.appendChild(template);
  }

  // 在执行之前，还需要挂载一个全局变量，让子应用的render不是自己执行，而是被我们的框架所调用
  (window as any).__MICRO__ = true;
  // 执行脚本，获取对应的生命周期钩子
  const appExports: any = await execScript();
  activeApp.mount = appExports.mount;
  activeApp.unmount = appExports.unmount;
  activeApp.bootstrap = appExports.bootstrap;

  await bootstrap(activeApp);
  await mount(activeApp);

  // 4:渲染子应用

  console.log(activeApp);
}

function matchActiveApp() {
  // 获取当前路由路径
  const path = window.location.pathname;
  const apps = getApps();
  const activeApp = apps.find(item => path.startsWith(item.activeRule));
  return activeApp;
}

async function bootstrap(app) {
  app.bootstrap && (await app.bootstrap());
}

async function mount(app) {
  app.mount &&
    (await app.mount({
      container: document.querySelector(app.container),
    }));
}

async function unmount(app) {
  app.unmount && (await app.unmount());
}
