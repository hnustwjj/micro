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
