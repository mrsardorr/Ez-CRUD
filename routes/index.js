const { Router } = require("express");
const router = Router();
const constructor = require("../constructor/index");

router.get("/", constructor.getMain);

router.get("/products", constructor.getProducts);

router.get("/add", constructor.addProduct);

router.post("/add/product", constructor.addProductFunc);

router.get("/delete", constructor.remProductFunc);

router.post("/delete/product", constructor.removeProductFunc);

router.get("/delete/:id", constructor.removeProductIDFunc);

router.get("/update", constructor.upProductFunc);

router.post("/update/product", constructor.updateProductFunc);

router.get("/box", constructor.getBOX);

router.get("/addToCard/:id", constructor.addToBox);

router.get("/delFromCard/:id", constructor.delCardFunc);






module.exports = router;
//b4r3b9U3NfHZ7i5
