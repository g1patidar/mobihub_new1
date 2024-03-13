
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faPlus, faListAlt, faTags, faTicketAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
const AdminLayout = () => {
  const [userData, setUserData] = useState(null);
  const [Username, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      const decodetoken = parseJwt(token);
      let name = decodetoken.Name;
      setUserName(name);
    }
    catch (error) {
      console.log(error)
    }

  }, [])
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }

  //login with Google


  useEffect(() => {
    const fetchUserData = async () => {
      try {

        const  response = await axios.get("https://mobihub-new1.onrender.com/getlogin", { withCredentials: true });
          console.log(response.data);
          setUserData(response.data);
          alert("you are sucssefully Login");
    
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();

  }, []);

  const handlelogout = async () => {

    await axios.post("https://mobihub-new1.onrender.com/logout", null, { withCredentials: true });
    setUserData(null);
    setUserName("")
    localStorage.removeItem("token");
    alert("You are seccfull Logout??");
    navigate("/home");
  };

  return (
    <>
      <div style={{ border: "1px solid black", padding: "2%" }}>Header </div>

      <div className="app">
        <div className="navbar">
          <div className="brand">
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span className="brand-text">Admin Panel</span>
          </div>

          <div>

            {userData ? (
              <ul>

                <img src={userData.image} alt="User Avatar" height="80" width="80" style={{ borderRadius: "50%", marginLeft: "20%" }} />
                <li style={{ textAlign: "center", listStyle: "none", marginTop: "10%" }}>{userData.displayName}</li>

                {/* Add more user data fields as needed */}
              </ul>


            ) : (
              <li style={{ textAlign: "center", listStyle: "none", marginTop: "5%", marginLeft: "50%" }}>{Username ? Username : "Admin"}</li>

            )}

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
          <div onClick={handlelogout} className="logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </div>
          <ToastContainer />
        </div>
        <div className="content">
          {/* Your main content goes here */}
          <Outlet />
        </div>
      </div>

      <div style={{ border: "1px solid black", padding: "2%" }}>Footer </div>
    </>
  )
}

export default AdminLayout;
