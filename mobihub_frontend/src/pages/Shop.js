import React, { useState } from 'react'
import ProductCard from './components/ProductCard';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "../slice/ProductSlice";
const Shop = () => {

  const mydispatch = useDispatch();
  const [allproductsdisplay, setallproductsdisplay] = useState([])
  const mydata = () => {
    axios.get("http://localhost:5000/api/user/finddatadisplay").then((res) => {
      console.log(res.data, "hello")
      setallproductsdisplay(res.data);
      console.log(allproductsdisplay)
    })
  }
  useEffect(() => {
    mydata()
  }, [])

  const onAddToCart=(productName,productPrice,regularPrice,Image_URL,product_ID)=>{
    mydispatch(addtocart({id:product_ID,
      Name:productName,Price:productPrice,Image_path:Image_URL,quantity:1}))
  }


  const allproduct = allproductsdisplay.map((key) => {
    return (
      <>
        <ProductCard
          Image_URL={key.Image_URL}
          productName={key.Product_Name}
          productPrice={key.Product_Price}
          regularPrice={key.Product_Regular_Price}
          product_ID={key._id}
          onAddToCart={onAddToCart} />

      </>
    )
  })




  return (
    <>
    <h1>hi</h1>
      <div className='main_product_card'>
        {/* {allproduct} */}
        {allproduct}
      </div>



      {/* <div className='banner'>
          <div className='inside_banner'>
          
          </div>
      </div>
      <div className='filter'>
        <h4>Filters</h4>
        <hr size="2px" color='black' />
        <div className='brand'>
          <span>BRAND</span>
          <select id='select'>
            <option value="icon"></option>
            <option value="realme">Realme</option>
            <option value="poco">Poco</option>
            <option value="i phone">I phone</option>
          </select>

          <div id="price">
            <p>PRICE</p>
            <input className='input' type='range'></input>
          </div>

          <div className='min_max_range'>
          <select id='min'>
          <option value="min">Min</option>
          <option value="realme">₹250</option>
          <option value="poco">₹1000</option>
          <option value="poco">₹2000</option>
          <option value="poco">₹5000</option>
         </select>
      to

         <select id='max'>
         <option value="realme">₹10000</option>
         <option value="poco">₹1000</option>
         <option value="poco">₹2000</option>
         <option value="poco">₹5000</option>
        </select>

          </div>
        </div>

      </div>
      <div class="midrange">
        <div>  </div>
      </div>

      <div className='main_shop'>

        <div className='shop1'>
          <div className='img_1'>
            <img src='./images/poco1.png' alt='poco' />
            <span>Poco X5 pro 5G <br /> <p>(Mars Orange 64)</p> </span>
          </div>
          <div id='rating_img'>
            <img src='./images/rating.png' alt='poco' />
            <p>₹ 10,999<span>18,999</span></p>
          </div>
        </div>

        <div className='shop2'>

          <div className='img_2'>
            <img src='./images/realme1.webp' alt='poco' />
            <span>Poco X5 pro 5G <br /> <p>(Mars Orange 64)</p> </span>
          </div>
          <div id='rating_img'>
            <img src='./images/rating.png' alt='poco' />
            <p>₹ 10,999<span>18,999</span></p>
          </div>

        </div>


        <div className='shop3'>

          <div className='img_3'>
            <img src='./images/i phone 13 2.png' alt='poco' />
            <span>Poco X5 pro 5G <br /> <p>(Mars Orange 64)</p> </span>
          </div>
          <div id='rating_img'>
            <img src='./images/rating.png' alt='poco' />
            <p>₹ 10,999<span>18,999</span></p>
          </div>


        </div>

        <div className='shop4'>

          <div className='img_4'>
            <img src='./images/poco3.png' alt='poco' />
            <span>Poco X5 pro 5G <br /> <p>(Mars Orange 64)</p> </span>
          </div>
          <div id='rating_img4'>
            <img src='./images/rating.png' alt='poco' />
            <p>₹ 10,999<span>18,999</span></p>
          </div>

        </div>
      </div> */}
    </>
  )
}

export default Shop;