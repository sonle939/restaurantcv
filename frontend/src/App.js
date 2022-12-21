
import {Route,Routes,Link, useNavigate} from "react-router-dom";
import Authuser from './pages/Authuser';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Account from './pages/Account';
import Book from './pages/Book';
import Order from './pages/Order';
import Turmover from './pages/Turmover';
import Product from './pages/Product';
import BookingTable from './pages/BookingTable';
import Navbar from './components/Navbar';
import AddUser from "./controller/user/AddUser";
import ReadUser from "./controller/user/ReadUser";
import UpdateUser from "./controller/user/UpdateUser";
import Category from "./pages/Category";
import AddCategory from "./controller/category/AddCategory";
import UpdateCategory from "./controller/category/UpdateCategory";
import ReadCategory from "./controller/category/ReadCategory";
import AddProduct from "./controller/product/AddProduct";
import UpdateProduct from "./controller/product/UpdateProduct";
import ReadProduct from "./controller/product/ReadProduct";
import About from "./pages/About";
import InfoUser from "./pages/InfoUser";
import Heart from "./pages/Heart";
import Card from "./pages/Card";
import { useState } from "react";
function App() {  
  const [heart, setHeart] = useState([]);
  const [card, setCard] = useState([]);
  return (
    <div className="App">
    <Navbar  heart={heart} setHeart={setHeart} card={card} setCard={setCard}/>
    <Routes>
        <Route path='/authuser' element={<Authuser/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/infouser' element={<InfoUser/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/card' element={<Card card={card} setCard={setCard}/>}/>
        <Route path='/heart' element={<Heart heart={heart} setHeart={setHeart}/>}/>
        <Route path='/turmover' element={<Turmover/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/bookingtable' element={<BookingTable/>}/>
        <Route path='/account' element={<Account/>}/>
        
        <Route path='/account/:id' element={<ReadUser/>}/>
        <Route path='/account/add' element={<AddUser/>}/>
        <Route path='/account/:id/edit' element={<UpdateUser/>}/>

        <Route path='/category/:id' element={<ReadCategory/>}/>
        <Route path='/category/add' element={<AddCategory/>}/>
        <Route path='/category/:id/edit' element={<UpdateCategory/>}/>

        <Route path='/product/:id' element={<ReadProduct/>}/>
        <Route path='/product/add' element={<AddProduct/>}/>
        <Route path='/product/:id/edit' element={<UpdateProduct/>}/>
    </Routes>
    </div>
  );
}

export default App;
