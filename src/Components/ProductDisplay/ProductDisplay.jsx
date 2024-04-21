import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
const ProductDisplay = (props) => {
  const {product}=props;
  console.log(props.product)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.media} alt="" />
                <img src={product.media} alt="" />
                <img src={product.media} alt="" />
                <img src={product.media} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.media} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.title}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
                
                
            </div>
            <div className="productdisplay-right-description">
                    {product.shortdescription} </div>
                    <div className="productdisplay-right-os">
                        <h1>
                            Selecciona el sistema operativo
                        </h1>
                        
                    <div className="productdisplay-right-oss">
                        <div>Windows</div>
                        <div>MacOS</div>
                        <div>Linux</div>
                        <div>Android</div>
                    </div>
                    </div>
                        <button>
                            AÑADIR AL CARRITO
                        </button>
                    <p className='productdisplay-right-category'><span>Categoría: </span>Clásico, para pasar el rato, fácil</p>
                    <p className='productdisplay-right-category'><span>Tags: </span>Lo último, chéveres</p>
                    </div>
                </div>
 
  )
}

export default ProductDisplay