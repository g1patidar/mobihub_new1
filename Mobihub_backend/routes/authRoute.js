const express = require("express");
const { createUser, loginUserCtrl, getalluser, getauser, getauserdelete, getauserupdated, ManageAddress } = require("../controller/userCtrl");
const { ProductAdd, DisplayProduct, DeleteProduct } = require("../controller/AdminControler")
const { setemail } = require("../controller/sendemail");
const router = express.Router();
router.post('/resister', createUser);
router.post('/login', loginUserCtrl);
router.get('/all_user', getalluser);
router.get('/:id', getauser);
router.delete('/:id', getauserdelete);
router.put('/:id', getauserupdated);
router.post('/ProdoctAdd', ProductAdd);
router.post('/DisplayProduct', DisplayProduct);
router.delete('/DeleteProduct/:id', DeleteProduct);



router.post('/ManagedlyAddress', ManageAddress);
router.get('/mail', setemail);
module.exports = router;