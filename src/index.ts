import World from "./world";

const root = document.getElementById('root')
const world = new World("Hello World!");
world.sayHello(root)


console.log("fkisoajo")



const button = document.getElementById("but");
// button!.addEventListener("click", () => alert("clickされました。"));


const enum EventName {
  CLICK = 'click'
}

button?.addEventListener(EventName.CLICK, () => alert("clickされました"))
