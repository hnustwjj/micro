import handleRouter from "./handleRouter";
export default function () {
  // hash ->  window.onhashchange
  // history -> (go,back,forward) window.onpopstate
  //         -> (pushState,replaceState) 重写函数
  window.addEventListener("popstate", handleRouter);

  const rawPushState = window.history.pushState;
  window.history.pushState = (...args) => {
    rawPushState.apply(window.history, args);
    handleRouter()
  };

  // const rawReplaceState = window.history.replaceState;
  // window.history.replaceState = (...args) => {
  //   rawReplaceState.apply(window.history, args);
  //   handleRouter()
  // };
}
