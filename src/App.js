import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import classic_banner from './Components/Assets/banner_classics.png'
import edu_banner from './Components/Assets/banner_edus.png'
import mobile_banner from './Components/Assets/banner_mobiles.png'
import Login from './Pages/Login';


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Shop/>}/>
        <Route path='/classics' element={<ShopCategory banner={classic_banner} category="classic"/>}/>
        <Route path='/edus' element={<ShopCategory banner={edu_banner} category="edu"/>}/>
        <Route path='/mobiles' element={<ShopCategory banner={mobile_banner} category="mobile"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/register' element={<LoginSignup/>}/> 
        <Route path='/login' element={<Login/>}/>
             
      </Routes>
      <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
