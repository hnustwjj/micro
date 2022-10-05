import { getApps } from "./";
  
// 处理路由变化
export default function () {
  // 2:匹配子应用
  const activeApp = matchActiveApp()
  // 3:加载子应用
  
  // 4:渲染子应用


  console.log(activeApp);
}

function matchActiveApp(){
  // 获取当前路由路径
  const path = window.location.pathname;
  const apps = getApps();
  // @ts-ignore
  const activeApp = apps.find(item => path.startsWith(item.activeRule));
  return activeApp
}