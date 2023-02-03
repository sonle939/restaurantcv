import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ListImages from "../../data/Images.json";
function UpdateUser() {
  const [inputs, setInputs] = useState([]);
  const [upproduct,setUpproduct] = useState([])
  const [imageLink,setImageLink] = useState(ListImages);
  const [backgr,setBackgr] = useState();
  const [hide,setHide] = useState(false);
  const nagative = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost/restaurantcv/backend/product/${id}`).then((res) => {
      console.log(res.data)
      setUpproduct(res.data); 
    });
  }, []);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUpproduct(values => ({ ...values, [name]: value }));
  }
  function getCategory() {
    axios.get('http://localhost/restaurantcv/backend/category/').then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }
  useEffect(() => {
    getCategory();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost/restaurantcv/backend/product/${id}/edit`, upproduct).then((response) => {
      console.log(response.data);
      nagative("/product");
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
  return (
    <div className='add_wrap'>
    <h1>Update product</h1>

    <form className='form_add from_product' onSubmit={handleUpdate}>
      <div className='add_control_list product'>
        <div className='add_item'>
          <h3>Product Name</h3>
          <input type="text" placeholder='Enter proname'
          onChange={handleChange}
            name="proname"
            value={upproduct.proname}
            required
          />
        </div>
        <div className='add_item'>
          <h3>Description</h3>
          <input type="text" placeholder='Enter des'
          name="description"
          onChange={handleChange}
          value={upproduct.description}
            required
          />
        </div>
        <div className='add_item'>
          <h3>Price</h3>
          <input type="text" placeholder='Enter price'
          name="price"
          onChange={handleChange}
          value={upproduct.price}
            required
          />
        </div>
        <div className='add_item'>
          <h3>Amount</h3>
          <input type="text" placeholder='Enter amount'
          name="amount"
          onChange={handleChange}
          value={upproduct.amount}
            required
          />
        </div>
        <div className='add_item'>
          <h3>Image</h3>
          <div className='input_images'>
            <input type="text" placeholder='Enter image'
              className='input_file'
              required disabled
              value={upproduct.image}

            />
            <p className='choosefile' onClick={()=>setHide(!hide)}>Choosefile</p>
          </div>
        </div>
        <div className='add_item'>
          <h3>CategoryID</h3>
          <select  onChange={e=>upproduct({...upproduct,categoryid: e.target.value})}>
            {inputs.map((items) => (
              <option value={items.categoryid}
               key={items.categoryid} >
               {items.categoryname}
               </option>
            ))}
          </select>
        </div>
      </div>
      <button type='submit' className='btn_product'>Update Product</button>
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
                <img src={items.image} onClick={()=>setUpproduct({...upproduct,image: items.image})}/>
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

export default UpdateUser