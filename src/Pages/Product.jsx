import React, {useContext, useState, useEffect} from 'react'
import {ShopContext} from '../Context/ShopContext';

import {useParams} from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const [json, setJson] = useState([]);

  const {productId} = useParams();
  useEffect(() => {
    fetch(`http://65.52.218.65/api/game?id=${Number(productId)}`)
    .then(response => response.json())
    .then(item => setJson(...item))
    .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <Breadcrum product={json}/>
      <ProductDisplay product={json}/>
    </div>
  )
}

export default Product
