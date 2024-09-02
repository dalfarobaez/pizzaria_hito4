import React, { useEffect,useState } from 'react'
import precioChileno from '../utils/utils.js'

const urlPizza = 'http://localhost:5000/api/pizzas/p001'

const Pizza = () => {
  const [pizza,setPizza] = useState ({})

  const getPizza = async () => {
    const response = await fetch(urlPizza)
    const datos = await response.json()
    setPizza(datos)
  }

  useEffect(() => {
    getPizza()
  },[])

  const {img,name,desc,ingredients,price} = pizza

  return (
    <div className='contenedorMayor'>
      <div className='contenedorUnaPizza'>
        <div className='fotoPizzaContainer2'>
          <img src = {img} alt={name} />
        </div>
        <div className='descripcionPizza'>
          <div>
            <h1>Pizza {name}</h1>
            <p>{desc}</p>
            <ul>
              {ingredients.map((item,i)=>(<li key={i}>🍕 {item}</li>))}
            </ul>
          </div>
          <div className='contenedorPrecio'>
            <div className='botonContainer2'><h3>{precioChileno(price)}</h3></div>
            <div className='botonContainer2'><div className='botonCompra'>Añadir 🛒</div></div>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Pizza