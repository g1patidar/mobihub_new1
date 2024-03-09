import React, { useState } from 'react';
import { FiMenu ,FiSearch, FiHeart } from 'react-icons/fi'; // Importing the menu icon
import { FaFilter } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../css/shop.css"

const Shop = () => {
  const [price, setPrice] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar open/close
  const [wishlist, setWishlist] = useState([]);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Sample array of products
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "https://i03.appmifile.com/879_item_in/05/12/2023/b479a356cd5d9e0f3dd1057a750cdc66!600x600!85.jpg",
      description: "Description of Product 1"
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://i03.appmifile.com/879_item_in/05/12/2023/b479a356cd5d9e0f3dd1057a750cdc66!600x600!85.jpg",
      description: "Description of Product 1"
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://i03.appmifile.com/879_item_in/05/12/2023/b479a356cd5d9e0f3dd1057a750cdc66!600x600!85.jpg",
      description: "Description of Product 1"
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://i03.appmifile.com/879_item_in/05/12/2023/b479a356cd5d9e0f3dd1057a750cdc66!600x600!85.jpg",
      description: "Description of Product 1"
    },
    // Add more products as needed
  ];

  // Function to handle search term change
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle wishlist
  const handleWishlistClick = (productId) => {
    // Check if productId is in wishlist
    if (wishlist.includes(productId)) {
      // If productId is already in wishlist, remove it
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      // If productId is not in wishlist, add it
      setWishlist([...wishlist, productId]);
    }
  };

  // Filtered products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='leftt'>
        <div className={`filter-container ${isOpen ? 'open' : ''}`}>
          <div className="sidebar-toggle" onClick={toggleSidebar}>
            <FaFilter  size="25" />
          </div>
          <div className="filter-content">
            <h2>Filter</h2>
            <div className="filter-section">
              <h3>Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                value={price}
                onChange={handlePriceChange}
                className="price-range"
              />
              <span className="price-value">${price}</span>
              <span className="price-value">$1000</span>
            </div>
            <div className="filter-section">
              <h3>Brands</h3>
              <select className="brand-select">
                <option value="brand1">Brand 1</option>
                <option value="brand2">Brand 2</option>
                <option value="brand3">Brand 3</option>
              </select>
            </div>
            <div className="filter-section">
              <h3>RAM</h3>
              <select className="ram-select">
                <option value="4gb">4GB</option>
                <option value="8gb">8GB</option>
                <option value="16gb">16GB</option>
                <option value="32gb">32GB</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='righttt'>
        
        <div className="search-section">
          <div className="search-container">
            <input
              type='text'
              placeholder="Search products..."
              className="search-input"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            <span className="search-icon">
              <FiSearch />
            </span>
          </div>
        </div>
        <br/>
        <div className="product-cards">
          {filteredProducts.length === 0 ? (
            <p>No products available <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/> <br/> </p>
            
          ) : (
            filteredProducts.map(product => (
              <div className="product-cardx" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className={`wishlist-icon ${wishlist.includes(product.id) ? 'clicked' : ''}`} onClick={() => handleWishlistClick(product.id)}>
                  <FiHeart />
                </div>
                <h3>{product.name}</h3>
                <p>Price:₹1000 <span className='regular_price_item'>2000</span></p>
                <div className="buttons">
                  <button className='buy_nowbutton'>Buy Now</button>
                  <button className='add_tobutton'>Add to Cart</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
