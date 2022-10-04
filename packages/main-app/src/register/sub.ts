import { registerMicroApps } from "../../micro/start";
export const subList = [
  {
    name: "vue3",
    activeRule: "/vue3",
    container: "#sub-caontiner",
    entry: "//localhost:9005",
  },
  {
    name: "vue2",
    activeRule: "/vue2",
    container: "#sub-caontiner",
    entry: "//localhost:9006", // 未创建
  },
  {
    name: "react",
    activeRule: "/react",
    container: "#sub-caontiner",
    entry: "//localhost:9007", // 未创建
  },
];

export default () => registerMicroApps(subList);