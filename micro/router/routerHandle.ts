export const turnApp = (num) => {
  console.log(num)
  if((window as any).__CURRENT__SUB__APP__ === window.location.pathname){
    return 
  }
  console.log("切换陆游");
};
