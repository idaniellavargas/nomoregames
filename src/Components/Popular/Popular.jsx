import React, {useState, useEffect} from 'react'
import './Popular.css'
import data_product from '../Assets/data.json'
import Item from '../Item/Item'


const Popular = () => {
  const [jsonList, setJsonList] = useState([])
  useEffect(()=>{
    fetch("http://65.52.218.65/api/game")
    .then(response => response.json())
    .then(data => setJsonList(data))
    .catch(error => console.log(error));
  }, []);

  return (
    <div className='popular'>
        <h1>POPULAR EN CLÁSICOS, PRUEBA LAS DEMOS SIN COMPROMISO</h1>
        <hr/>
        <div className="popular-item">
            {jsonList.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.title} image={item.media}/>
            })}
        </div>
    </div>
  )
}

    export default Popular