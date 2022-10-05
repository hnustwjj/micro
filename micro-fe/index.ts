import rewriteRouter from "./rewriteRouter";
import handleRouter from "./handleRouter";
type SubApp = {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
  mount?: () => Promise<void>;
  unmount?: () => Promise<void>;
  bootstrap?: () => Promise<void>;
};
let _apps: SubApp[] = [];

export const getApps = () => _apps;

// 注册子应用
export const registerMicroApps = (apps: SubApp[]) => {
  _apps = apps;
};

// 微前端运行原理
export const start = () => {
  // 1:拦截路由
  rewriteRouter();

  // 第一次默认执行一次路由匹配
  handleRouter();
};
