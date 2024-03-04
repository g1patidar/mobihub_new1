import React from 'react';
import "../css/AdminComponentCss/ProductList.css"
const ProductList = () => {
  // Sample product data with image URLs
  const products = [
    { id: 1, name: 'Product A', price: '$20.00', imageUrl: 'https://placekitten.com/100/100' },
    { id: 2, name: 'Product B', price: '$25.00', imageUrl: 'https://placekitten.com/100/100' },
    { id: 3, name: 'Product C', price: '$30.00', imageUrl: 'https://placekitten.com/100/100' },
  ];

  return (
    <div className="product-list-container1">
      <h1>Product List</h1>
      <table className="product-table1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td><img src={product.imageUrl} alt={product.name} className="product-image1" /></td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button className="edit-btn1">Edit</button>
                <button className="delete-btn1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
