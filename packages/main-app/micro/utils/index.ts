import { getList } from "./../const/appList";
// 给当前的路由打补丁
export const patchRouter = (rawEvent, eventName) => {
  return function (this: any, ...args) {
    // 创建一个事件
    const e = new Event(eventName);
    // 触发原事件
    rawEvent.apply(this, args);
    // 触发创建的事件
    window.dispatchEvent(e);
  };
};

// 根据路由查找当前匹配的子应用
export const currentApp = () => {
  const { pathname } = window.location;
  const app = filterApp('activeRule',pathname)
  return app
};

const filterApp = (k, v) => {
  const list = getList().filter(i => i[k] === v)
  return list && list.length ? list[0] : {}
};
