import rewriteRouter from "./router/rewriteRouter";
import { setList } from "./const/appList";
rewriteRouter();
export const registerMicroApps = appList => {
  console.log(appList);
  setList(appList);
};
