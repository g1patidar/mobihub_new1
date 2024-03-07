import { useState, useEffect } from "react";
import axios from "axios";
const AddBrand = () => {
    const [input, setInput] = useState({});

    const inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }));
    };

    const createbrand = () => {
        console.log(input);
    };

    // Our All Brands

    const myBrands = async () => {
        await axios.post("http://localhost:5000/api/user/DisplayBrands").then((res) => {
            // setallproductsdisplay(res.data);
            console.log("displayed")

        })
    }

    // useEffect(() => {
    //     myBrands()
    // }, [])


    // delete brand
    const handleDelete = async (productId) => {
        try {
            // Make an API call to delete the product
            axios.delete(`http://localhost:5000/api/user/DeleteBrand/${productId}`).then(() => {
                alert("Product deleted successfully");
                myBrands();
            });

            console.log("Brand deleted successfully");
            alert("Brand deleted successfully");
            // Assuming myBrands() is an asynchronous function, you can await it as well
            myBrands();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };



    return (
        <>
            <div className="boxmain">
                <h1 className="Had1">Create Brands</h1>
                <div className="box">
                    <div className="input_container">
                        <p>
                            Use the tarm to <b>Create Brands</b>
                        </p>
                    </div>
                    <div className="inside_container">
                        <p>Brand name</p>
                        <input
                            type="text"
                            placeholder=" Enter Brand name"
                            name="Brand_Name"
                            value={input.Brand_Name}
                            onChange={inputHandle}
                        />
                        <p>Parent category</p>
                        <input
                            type="text"
                            placeholder=" Select Parent category"
                            name="Parent_Category"
                            value={input.Parent_Category}
                            onChange={inputHandle}
                        />

                        <div className="btn_1">
                            <button onClick={createbrand}> Save Brand </button>
                        </div>
                    </div>
                    <h2 className="had"> All Brands </h2>
                    <div className="tital_1">
                        <h3>s/n</h3>
                        <h3>Name</h3>
                        <h3>Category</h3>
                        <h3>Action</h3>
                    </div>
                    <hr />

                    <div className="sub_tital_1">
                        <p>1</p>
                        <p>Redmi</p>
                        <p>Mobile</p>
                        <div className="brand_action_buttons">
                            <button className="brand_edit_button">Edit</button>
                            <button className="brand_delete_button" onClick={() => handleDelete()}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddBrand;
