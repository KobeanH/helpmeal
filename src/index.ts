// import World from "./world";

// const root = document.getElementById('root')
// const world = new World("Hello World!");
// world.sayHello(root)


const button = document.getElementById("but");

const enum EventName {
  CLICK = 'click'
}
button?.addEventListener(EventName.CLICK, () => alert("clickされました"))
