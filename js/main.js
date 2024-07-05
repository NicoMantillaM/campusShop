import { getAllRopa } from "./components/toda.js";

console.log(await getAllRopa());

import { name } from "./modules/nombre.js";

console.log(await name());


import { nameCdUno } from "./modules/nombre.js";

console.log(await nameCdUno());

let nombreAbrigo = document.querySelector("#name")

nombreAbrigo.innerHTML =""

nombreAbrigo.innerHTML =await name()

