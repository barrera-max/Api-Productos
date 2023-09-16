import { Producto } from "../models/producto.js";


async function  getAll(){
    return await Producto.findAll({}) 
}


async function updateById(valor, nuevoStock){
    const prod = await Producto.findOne({where:{id: valor}})

    if(prod) {
        prod.stock = nuevoStock
        return prod.save()
    }
    return null

}

async function add(nuevo){
    await Producto.create(nuevo)
}

export default{
    getAll,
    updateById,
    add
}













