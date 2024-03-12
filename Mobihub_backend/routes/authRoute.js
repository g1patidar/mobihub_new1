
const express = require("express");
const router = express.Router();

const { createUser, loginUserCtrl, getalluser, getauser, getauserdelete, getauserupdated, ManageAddress } = require("../controller/userCtrl");
const { ProductAdd, DisplayProduct, DeleteProduct, AddBrand, AddCoupon, DisplayBrands, DeleteBrand, DisplayCoupons, DeleteCoupon } = require("../controller/AdminControler");

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

// brand API ///////
router.post('/AddBrand', AddBrand);
router.post('/DisplayBrands', DisplayBrands);
router.delete('/DeleteBrand/:itemId', DeleteBrand);


/////// Coupon API //////////////
router.post("/AddCoupon", AddCoupon);
router.post("/DisplayCoupons", DisplayCoupons);
router.delete("/DeleteCoupon/:itemId", DeleteCoupon) ;
module.exports = router;

