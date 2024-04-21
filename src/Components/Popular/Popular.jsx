import React from 'react'
import './Popular.css'
import data_product from '../Assets/data.json'
import Item from '../Item/Item'


const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR EN CLÁSICOS, PRUEBA LAS DEMOS SIN COMPROMISO</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
            <iframe src="https://private.gamify.com/custom-play/195097855" width="600" height="338"></iframe>
    </div>
  )
}

    export default Popular