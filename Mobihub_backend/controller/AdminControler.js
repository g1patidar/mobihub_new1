const AdminModel = require("../models/Admin/Productadd");

const ProductAdd =  (req, res) =>
    {
         const myproduct = new AdminModel(req.body);
         console.log(myproduct);
         myproduct.save();

         res.send("data seccufull seva");
        // console.log(myproduct);
    }

    const DisplayProduct = async (req, res) => {
        try {
            const products = await AdminModel.find();
            res.json(products);
            console.log(products)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    module.exports = { ProductAdd, DisplayProduct };