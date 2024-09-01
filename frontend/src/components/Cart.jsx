import React from 'react'
import {pizzaCart} from '../data/pizzas.js'
import precioChileno from '../utils/utils.js'
import { useState } from "react"

const Cart = () => {
  const [carrito,setCarrito] = useState (pizzaCart)
  const [total,setTotal] = useState (carrito.map(item => item.count * item.price).reduce((suma,iteracion) => suma + iteracion,0))

  const agregaPizza = (idPizza) => {
    const newCarrito = [...carrito]
    let newTotal = total + 0

    const index = newCarrito.findIndex(item => item.id === idPizza)
    newCarrito[index].count +=1
    newTotal += newCarrito[index].price
    
    setCarrito (newCarrito)
    setTotal(newTotal)
  }
  const quitarPizza = (idPizza) => {
    const newCarrito = [...carrito]
    let newTotal = total + 0

    const index = newCarrito.findIndex(item => item.id === idPizza)
    newTotal -= newCarrito[index].price

    if (newCarrito[index].count > 1) {
      newCarrito[index].count -=1
    } else if (newCarrito[index].count === 1) {
      newCarrito.splice(index, 1)
    }
    
    setCarrito (newCarrito)
    setTotal(newTotal)
  } 

  return (
    <div>
      <div className='infoCarrito'>
        <h2>Carrito de compras</h2>
      </div>
      <div className='contenedorGaleriaCarrito'>
        {carrito.map((pizza)=>
          <div key={pizza.id} className='contenedorPizzaCarrito'>
            <div className='fotoPizzaContainer'>
              {<img src = {pizza.img} alt={pizza.name} />}
            </div>
            <div>
              <h4>Pizza {pizza.name}</h4>
              <h5>{precioChileno(pizza.price)}</h5>
              <p>Cantidad: {pizza.count}</p>
            </div>
            <div className='botones-container'>
              <button className='btn btn-agregar' onClick={()=>agregaPizza(pizza.id)}>Agregar</button>
              <button className='btn btn-quitar' onClick={()=>quitarPizza(pizza.id)}>Quitar</button>
            </div>
          </div>
        )}    
      </div>
      <div className='infoCarrito'>
        <h3>Total: {precioChileno(total)}</h3>
        <button className='btn btn-pagar'>Pagar</button>
      </div>
    </div>
  )
}

export default Cart