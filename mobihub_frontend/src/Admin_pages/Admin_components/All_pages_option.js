import { Link } from "react-router-dom";

const All_pages_option = () => {

    return (
        <>
                <div className="First_box_first">
                    <div className="First_box_first_div">
                        <img src="./Admin_images/user_img.svg" alt="" />
                        <p>Admin</p>
                    </div>
                    <div id="hidden">
                        <Link to="/admin_layout/admin_home"><h2>Home</h2></Link>
                        <hr />
                        <Link to="/admin_layout/admin_addproduct"><h2>Add Products</h2></Link>
                        <hr />
                        <Link><h2>All Products</h2></Link>
                        <hr />
                        <Link to="/admin_layout/admin_oderdetail"><h2>Order </h2></Link>
                        <hr />
                        <Link to="/admin_layout/admin_brand"><h2>Brands</h2></Link>
                        <hr />
                        <Link to="/admin_layout/admin_coupon"><h2>Coupon</h2></Link>
                        <hr />
                        <Link><h3>Logout</h3></Link>
                    </div>
                </div>
        </>
    );
}
export default All_pages_option;
