import handleRouter from "./handleRouter";
let preRoute: string | null = null;
let nextRoute: string | null = null;

export const getPreRoute = () => preRoute;
export const getNextRoute = () => nextRoute;

export default function () {
  // hash ->  window.onhashchange

  
  // history -> (go,back,forward) window.onpopstate
  //         -> (pushState,replaceState) 重写函数
  window.addEventListener("popstate", ()=>{
    preRoute = nextRoute  // 之前的
    nextRoute = window.location.pathname  // 最新的
    handleRouter()
  });

  const rawPushState = window.history.pushState;
  window.history.pushState = (...args) => {
    preRoute = window.location.pathname;
    rawPushState.apply(window.history, args);
    nextRoute = window.location.pathname;
    handleRouter();
  };

  const rawReplaceState = window.history.replaceState;
  window.history.replaceState = (...args) => {
    rawReplaceState.apply(window.history, args);
    handleRouter()
  };
}
