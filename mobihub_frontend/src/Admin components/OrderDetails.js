import axios from "axios";
import { useEffect, useState } from "react";

const OrderDetails = () => {
    const [orderdata, setOrderData] = useState([]);
    const [orderStatus, setOrderStatus] = useState("Order Processing")
    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/user/getOrderData");
                setOrderData(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchOrderData();
    }, []);

    const changeOrderStatus = async (e) => {
        const newStatus = e.target.value;
        setOrderStatus(newStatus);
        try {
            const res = await axios.post("http://localhost:5000/api/user/orderStatuschange", { OrderStatus: newStatus });
            alert(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const allOrderData = orderdata.map((key, index) => (
        <div key={index} className="All_order_detail_info">
            <div>{index + 1}.</div>
            <div>{key.Date}</div>
            <div>{key.orderID}</div>
            <div>{key.amount}</div>
            <div>
                <select value={orderStatus} onChange={changeOrderStatus} style={{ border: "none" }}>
                    <option value="Order Processing">Order Processing</option>
                    <option value="Shipment">Shipment</option>
                    <option value="Delivery">Delivery</option>
                </select>
            </div>
        </div>
    ));

    return (
        <>
            <div className="All_orders_detail_admin">
                <h1>
                    All Orders
                </h1>
                <div>
                    <nav className="nav_order_detail">
                        <h5>s/n</h5>
                        <h5>Date</h5>
                        <h5>Order ID</h5>
                        <h5>Order Amount </h5>
                        <h5>Order Status</h5>
                    </nav>

                    {allOrderData}

                </div>
            </div>

        </>
    )
}

export default OrderDetails;




// import axios from "axios";
// import { useEffect, useState } from "react";

// const OrderDetails = () => {
//     const [orderdata, setorderdata] = useState([]);
//     const [orderstatus, setorderstatus] = useState("Order Processing")
//     useEffect(async () => {
//         try {
//             await axios.post("https://mobihub-new1.onrender.com/getOrderData").then((res) => {
//                 setorderdata(res.data);
//                 console.log(res.data)
//             })
//         }
//         catch (err) {
//             console.log(err);
//         }
//     }, [])

//     const Changeorderstatus = async (e) => {
//         setorderstatus(e.target.value)
//         try {
//             await axios.post("https://mobihub-new1.onrender.com/orderStatuschange", { OrderStatus: orderstatus }).then((res) => {
//                 alert(res.data);
//             })
//         }
//         catch (err) {
//             console.log(err);
//         }
//     }

//     const allorderdata = orderdata.map((key) => {
//         return (
//             <>
//                 <div className="All_order_detail_info">
//                     <div>1.</div>
//                     <div>{key.Date}</div>
//                     <div>{key.orderID}</div>
//                     <div>{key.amount}</div>
//                     <div>
//                         <select value={orderstatus} onChange={Changeorderstatus} style={{ border: "none" }}>
//                             <option value="Order Processing">Order Processing</option>
//                             <option value="Shipment">Shipment</option>
//                             <option value="Delivery">Delivery</option>
//                         </select>
//                     </div>
//                 </div>
//             </>
//         )
//     })

//     return (
//         <>
//             <div className="All_orders_detail_admin">
//                 <h1>
//                     All Orders
//                 </h1>
//                 <div>
//                     <nav className="nav_order_detail">
//                         <h5>s/n</h5>
//                         <h5>Date</h5>
//                         <h5>Order ID</h5>
//                         <h5>Order Amount </h5>
//                         <h5>Order Status</h5>
//                     </nav>

//                     {allorderdata}

//                 </div>
//             </div>

//         </>
//     )
// }

// export default OrderDetails;
