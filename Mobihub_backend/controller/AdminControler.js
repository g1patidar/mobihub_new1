const AdminModel = require("../models/Admin/Productadd");

const ProductAdd = async (req, res) => {
    try {
        const myproduct = new AdminModel(req.body);
        console.log(myproduct);
        await myproduct.save();
        
        res.send("Data successfully saved");
        // You can also include additional logic or response here if needed
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).send("Internal Server Error");
    }
};


// API for display all product 

const DisplayProduct = async (req, res) => {
    try {
        const products = await AdminModel.find();
        res.send(products);
        // console.log(products);
        console.log("all product send by displayproduct api")
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// API for delete item from database 

const DeleteProduct = async (req, res) => {

    const delId = req.params.id
    let respo = await AdminModel.deleteOne({ _id: delId })
    // console.log(respo)
    console.log("delete")
}


module.exports = { ProductAdd, DisplayProduct, DeleteProduct };