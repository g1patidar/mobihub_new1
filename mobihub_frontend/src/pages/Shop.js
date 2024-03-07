import React, { useState } from 'react'
import ProductCard from './components/ProductCard';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "../slice/ProductSlice";
import {addtoWishlist} from "../slice/WishlistSlice"
const Shop = () => {

  const mydispatch = useDispatch();
  const [allproductsdisplay, setallproductsdisplay] = useState([])
  const mydata = () => {
    axios.post("http://localhost:5000/api/user/DisplayProduct").then((res) => {
      // console.log(res.data, "hello")
      setallproductsdisplay(res.data);
      console.log(allproductsdisplay)
    })
  }
  useEffect(() => {
    mydata()
  }, [])

  const onAddToCart = (productName, productPrice, regularPrice, Image_URL, product_ID) => {
    mydispatch(addtocart({
      id: product_ID,
      Name: productName, Price: productPrice, Image_path: Image_URL, quantity: 1
    }))
  }

  const handlewishlist=(
          productName,
          productBrand,
          productPrice,
          productRAM,
          productROM,
          regularPrice,
          Image_URL,
          product_ID
         
  )=>{
    
    mydispatch(addtoWishlist({
      id: product_ID,
      Name: productName,
      Price: productPrice,
      Image_path: Image_URL,
      RAM:productRAM,
      ROM:productROM,
    }))
  }

  const allproduct = allproductsdisplay.map((key) => {
    return (
      <>
        <ProductCard
          productBrand={key.Product_Brand}
          productRAM={key.Product_RAM}
          productROM={key.Product_ROM}
          Image_URL={key.Image_URL}
          productName={key.Product_Name}
          productPrice={key.Product_Price}
          regularPrice={key.Product_Regular_Price}
          product_ID={key._id}
          onAddToCart={onAddToCart}
          handlewishlist={handlewishlist} />

      </>
    )
  })


  return (
    <>

      <div className='main_product_card'>
        {/* {allproduct} */}
        {allproduct}
      </div>
    </>
  )
}

export default Shop;