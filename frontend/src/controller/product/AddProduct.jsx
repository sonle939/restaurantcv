import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../pages/css/account.css';
import ListImages from "../../data/Images.json";
function Addproduct() {
  const [proname, setProname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState();
  const [categoryid, setCategoryid] = useState("");
  const [inputs, setInputs] = useState([]);
  const [imageLink,setImageLink] = useState(ListImages);
  const [backgr,setBackgr] = useState();
  const [hide,setHide] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost/restaurantcv/backend/category/').then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }
  const data = {
    proname: proname,
    description: description,
    price: price,
    amount: amount,
    image: image, 
    categoryid:categoryid
  };
  const submitAccount = (e) => {
    e.preventDefault();
    axios.post('http://localhost/groupseven/backend/product/save', data)
      .then(resault => {
        console.log(resault);
        navigate("/product")
      });
  }
  const filterImagelist = (categoryitem)=>{
    const updateImages = ListImages.filter((curEle)=>{
        return curEle.category === categoryitem;
    });
      setImageLink(updateImages);
  };
  const handleHide =()=>{
    setHide(!hide);

  }
  console.log(categoryid)
  return (
    <div className='add_wrap'>
      <h1>Add product</h1>

      <form className='form_add from_product' onSubmit={submitAccount}>
        <div className='add_control_list product'>
          <div className='add_item'>
            <h3>Product Name</h3>
            <input type="text" placeholder='Enter proname'
              onChange={e => setProname(e.target.value)}
              required
            />
          </div>
          <div className='add_item'>
            <h3>Description</h3>
            <input type="text" placeholder='Enter des'
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          <div className='add_item'>
            <h3>Price</h3>
            <input type="text" placeholder='Enter price'
              onChange={e => setPrice(e.target.value)}
              required
            />
          </div>
          <div className='add_item'>
            <h3>Amount</h3>
            <input type="text" placeholder='Enter amount'
              onChange={e => setAmount(e.target.value)}
              required
            />
          </div>
          <div className='add_item'>
            <h3>Image</h3>
            <div className='input_images'>
              <input type="text" placeholder='Enter image'
                className='input_file'
                required disabled
                value={image}

              />
              <p className='choosefile' onClick={()=>setHide(!hide)}>Choosefile</p>
            </div>
          </div>
          <div className='add_item'>
            <h3>CategoryID</h3>
            <select  onChange={e=>setCategoryid(e.target.value)}>
              {inputs.map((items) => (
                <option value={items.categoryid}
                 key={items.categoryid} >
                 {items.categoryname}
                 </option>
              ))}
            </select>
          </div>
        </div>
        <button type='submit' className='btn_product'>Add Product</button>
      </form>
      <div className={hide ? 'image_container active':"image_container"}>
        <div className='image_wrapper'>
          <h3>Images List </h3>
          <div className='image_control'>
            <div className='btn_item_image' onClick={()=>setImageLink(ListImages)}>All image</div>
            <div className='btn_item_image' onClick={()=>filterImagelist('hotpot')}>Hotpot</div>
            <div className='btn_item_image' onClick={()=>filterImagelist('grilled')}>Grilled</div>
            <div className='btn_item_image' onClick={()=>filterImagelist('drinks')}>Drinks</div>
            <div className='btn_item_image' onClick={()=>filterImagelist('orther')}>Orther</div>
          </div>
          <div className='image_contents'>
            {imageLink.map((items) => (
              <div className={backgr === items.id ? 'image_content active':"image_content"} key={items.id} onClick={()=>setBackgr(items.id)}>
                <div className='img_link'>
                  <img src={items.image} onClick={()=>setImage(items.image)}/>
                </div>
                <p>{items.name}</p>
              </div>
            ))}
          </div>
          <div className='btn_image_exit'>
              <button onClick={handleHide}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addproduct