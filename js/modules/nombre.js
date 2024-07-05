import { getAllAbrigo } from "../components/abrigo.js";


export const name = async()=>{
    let data = await getAllAbrigo()
    let abrigonom = data.abrigo
    let name = abrigonom.map((abrigo)=>{
        return abrigo.nombre
    })
    return name;
}

export const nameCdUno = async()=>{
    let data = await getAllAbrigo()
    let abrigonom = data.abrigo
    let name = abrigonom[0].nombre
    return name;
}