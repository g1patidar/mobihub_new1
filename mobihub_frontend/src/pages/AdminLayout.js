
import { Outlet } from "react-router-dom";
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faPlus, faListAlt, faTags, faTicketAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
const AdminLayout = () => {

  return (
    <>
      <div style={{ border: "1px solid black", padding: "2%" }}>Header </div>

      <div className="app">
        <div className="navbar">
          <div className="brand">
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span className="brand-text">Admin Panel</span>
          </div>
          <Link to="/admin_layout/Admin_dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </Link>
          <Link to="/admin_layout/ProductList">
            <FontAwesomeIcon icon={faBox} /> Products
          </Link>
          <Link to="/admin_layout/add_product">
            <FontAwesomeIcon icon={faPlus} /> Add Product
          </Link>
          <Link to="/admin_layout/orderdetails">
            <FontAwesomeIcon icon={faListAlt} /> Order Details
          </Link>
          <Link to="/admin_layout/add-brand">
            <FontAwesomeIcon icon={faTags} /> Add Brand
          </Link>
          <Link to="/admin_layout/add-coupon">
            <FontAwesomeIcon icon={faTicketAlt} /> Add Coupon
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </Link>
        </div>
        <div className="content">
          {/* Your main content goes here */}
          <Outlet/>
        </div>
      </div>




      <div style={{ border: "1px solid black", padding: "2%" }}>Footer </div>
    </>
  )
}
export default AdminLayout;