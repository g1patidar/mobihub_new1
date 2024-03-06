
const express = require("express");
const router = express.Router();
const {createUser,loginUserCtrl,getalluser,getauser, getauserdelete,getauserupdated,ManageAddress} = require("../controller/userCtrl");
const {ProductAdd,DisplayProduct} = require("../controller/AdminControler");
// const {setemail} = require("../controller/sendemail");

// Routes for user management
router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/all_users', getalluser);
router.get('/:id', getauser);
router.delete('/:id', getauserdelete);
router.put('/:id', getauserupdated);
router.post('/product_add', ProductAdd);
router.get('/display_products', DisplayProduct);
router.post('/manage_address', ManageAddress);
// router.get('/mail', setemail);


module.exports = router;
