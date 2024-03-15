import { FaCheckCircle } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { ImAddressBook } from "react-icons/im";
import { LuContact } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import "../../../css/OrderComplete.css";
import { Link } from "react-router-dom";

const OrderComplete = () => {
  return (
    <>
      <div className="Order-Complete">
        <div className="Order-Complete-left">
            <p className="check-icon"><FaCheckCircle /></p>
            <p>Thank you</p>
            <h1>YOUR ORDER IS CONFIRMED </h1>
            <p>We will be sending you an email confirmation to yourgmail@gmail.com shorty</p>
        </div>

        <div className="Order-Complete-right">
            <div className="Order-Details">
                <div>
                    <p>Order Detail</p>
                    <h3>#2059666</h3>
                </div>
                <div>
                    <p>Pay with PayPal</p>
                    <button><IoMdDownload />Download Invoice</button>
                </div>
            </div>
            <div className="delivery-address">
                <div>
                    <p><TbTruckDelivery /> DELIVERY ADDRESS </p>
                </div>
                <div>
                    <Link to="fg">Change Details</Link>
                </div>

            </div>
            <hr/>
            <div>
                <p>Vvip Addresses, Raj Nagar Extension Road <br/>
                    Raj Nagar Extension Ghaziabad  </p>
            </div>
            <hr/>
            <div>
                <p><ImAddressBook /> BILLING ADDRESS</p>
            </div>
            <hr/>
            <div>
                <p>Vvip Addresses, Raj Nagar Extension Road <br/>
                    Raj Nagar Extension Ghaziabad  </p>
            </div>
            <hr/>
            <div>
                <LuContact /> CONTACT DETAILS
            </div>
            <hr/>
            <div>
                <p>email@company.com</p>
                <p><Link to="">+91-987 000 0000</Link></p>
                <p><Link to="">+91-987 000 0000</Link></p>
            </div>
            <hr/>
            <div className="Order-Summary">
                <div>ORDER SUMMARY (3)</div>
                <div> <Link to="kv"><FaChevronRight /></Link> </div>
            </div>
            <hr/>
            <div className="Final-Sub-Total">
                <div>
                    <p>Sub Total</p>
                </div>
                <div>
                    <p>₹15.00</p>
                </div>
            </div>
            <hr/>
            <div className="Final-Delivery">
                <div>
                    <p>Sub Total</p>
                </div>
                <div>
                    <p>₹16.00</p>
                </div>
            </div>
            <hr/>
            <div className="Total-Amount">
                <div>
                    <p>Total</p>
                </div>
                <div>
                <p>₹31.00</p>
                </div>
            </div>

        </div>

      </div>
    </>
  )
}

export default OrderComplete
