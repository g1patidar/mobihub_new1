
const express = require("express");
const { createUser, loginUserCtrl, getalluser, getauser, getauserdelete, getauserupdated, ManageAddress } = require("../controller/userCtrl");
const { ProductAdd, DisplayProduct, DeleteProduct } = require("../controller/AdminControler")
const { setemail } = require("../controller/sendemail");

const router = express.Router();
// const {createUser,loginUserCtrl,getalluser,getauser, getauserdelete,getauserupdated,ManageAddress} = require("../controller/userCtrl");
// const {ProductAdd,DisplayProduct} = require("../controller/AdminControler");
// const {setemail} = require("../controller/sendemail");

// Routes for user management
router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/all_users', getalluser);
router.get('/:id', getauser);
router.delete('/:id', getauserdelete);
router.put('/:id', getauserupdated);

router.post('/ProdoctAdd', ProductAdd);
router.post('/DisplayProduct', DisplayProduct);
router.delete('/DeleteProduct/:id', DeleteProduct);

router.post('/ManagedlyAddress', ManageAddress);
module.exports = router;

