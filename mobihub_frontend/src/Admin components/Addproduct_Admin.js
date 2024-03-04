import React, { useState } from "react";
import axios from "axios";

const Addproduct_Admin = () => {
    const [input, setInput] = useState({});
    // const [uploadFiles, setUploadFiles] = useState([]);
    const [uploadFiles, setUploadFiles] = useState(null);

    const handleFileChange = (e) => {
        // const files = e.target.files;
        // setUploadFiles(files);
        setUploadFiles(e.target.files[0]);
    };

    const inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }));
    };

    const handleAddProduct = async () => {
        const formdata = new FormData();
    formdata.append("file", uploadFiles);
    formdata.append("upload_preset", "ofkoxtub");
    formdata.append("cloud_name", "dq1yrqhsl");
    const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dq1yrqhsl/image/upload/",
        formdata
    );
    const imgUrl = response.data.url;

    const productDetails = {
        ...input,
        Image_URL: imgUrl,
    };


        try {
           
            
            // Send productDetails to your backend API for further processing
            console.log("Product details:", productDetails);

            const responseapi = await axios.post("http://localhost:7000/addproduct_admin", productDetails);
            console.log(responseapi);
            console.log("send detail of product successful !@!")


        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    return (
        <div className="AddProductForm">
            
            <div className="Upload_img_main_div">
            <h1>Add Product</h1>
                <div className="img_div">
                    <div>
                        <input
                            className="file_upload"
                            type="file"
                            onChange={handleFileChange}
                            multiple
                        />
                        <h3>Click to upload up to images</h3>
                    </div>
                </div>

                <div className="sec_box_img">
                    <div>
                        <img src="./Admin_images/app.png" alt="" />
                    </div>
                    <div>
                        <img src="./Admin_images/Galaxy.png" alt="" />
                    </div>
                    <div>
                        <img src="./Admin_images/i phone 13 2.png" alt="" />
                    </div>
                </div>

                <div className="Input_div_start">
                    <h2>Add Products</h2>
                    <div className="Input_div_start_box">
                        <div className="input-container">
                            <label className="form-label">Enter Product Name :</label>
                            <input
                                className="form-input"
                                type="text"
                                name="Product_Name"
                                value={input.Product_Name || ""}
                                onChange={inputHandle}
                            />
                        </div>

                        <div className="input-container">
                            <label className="form-label">Enter Product Price :</label>
                            <input
                                className="form-input"
                                type="text"
                                name="Product_Price"
                                value={input.Product_Price || ""}
                                onChange={inputHandle}
                            />
                        </div>

                        <div className="input-container">
                            <label className="form-label">Enter Regular price :</label>
                            <input
                                className="form-input"
                                type="text"
                                name="Product_Regular_Price"
                                value={input.Product_Regular_Price || ""}
                                onChange={inputHandle}
                            />
                        </div>

                        <div>

                            <label className="form-label">Choose RAM:</label>
                            <select
                                className="form-input"
                                name="Product_RAM"
                                value={input.Product_RAM || ""}
                                onChange={inputHandle}
                            >
                                <option value="">Select RAM</option>
                                <option value="4GB">4GB</option>
                                <option value="8GB">8GB</option>
                                <option value="16GB">16GB</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        <div className="input-container">
                            <label className="form-label">Choose ROM:</label>
                            <select
                                className="form-input"
                                name="Product_ROM"
                                value={input.Product_ROM || ""}
                                onChange={inputHandle}
                            >
                                <option value="">Select ROM</option>
                                <option value="32GB">32GB</option>
                                <option value="64GB">64GB</option>
                                <option value="128GB">128GB</option>
                                <option value="256GB">256GB</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        <div className="input-container">
                            <label className="form-label">Choose Brand:</label>
                            <select
                                className="form-input"
                                name="Product_Brand"
                                value={input.Product_Brand || ""}
                                onChange={inputHandle}
                            >
                                <option value="">Select Brand</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Apple">Apple</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Redmi">Redmi</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        <button className="registration-btn" onClick={handleAddProduct}>
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addproduct_Admin;
