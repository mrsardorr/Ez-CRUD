const Category = require("../model/index");
const Product = require("../model/product");
const boxlist = []

module.exports.getMain = async function (req, res) {
  res.render("index", {
    title: "Home page",
    isHome: true,
  });
};

module.exports.getProducts = async function (req, res) {
  const productss = await Product.find(); 
  let total = 0
  productss.forEach(element => {
    total = element.price + total
  });
  let floor = Math.floor(total)
  res.render("products", {
    productss,
    floor
  });
    // console.log(productss);
};

module.exports.addProduct = async function (req, res) {
    res.render("add", {
    });
  };

module.exports.addProductFunc = async function (req, res) {
    // const products = req.body
    const product = new Product({
        name: req.body.Product,
        price: +req.body.Price,
        category: req.body.ctgID
    })

    await product.save()
    res.redirect('/index/products/')
  };

  module.exports.remProductFunc = async function (req, res) {
    res.render("remove", {
    });
  };

module.exports.removeProductFunc = async function (req, res) {
    const iddd = req.body.ID
    await Product.findByIdAndRemove(iddd)
    res.redirect('/index/products/')
  };

module.exports.removeProductIDFunc = async function (req, res) {
    const iddd = req.params.id
    await Product.findByIdAndRemove(iddd)
    res.redirect('/index/products/')
  };


  module.exports.upProductFunc = async function (req, res) {
    res.render("update", {
    });
  };

module.exports.updateProductFunc = async function (req, res) {
    const iddd = req.body.ID
    const newww = {
      name: req.body.name,
      price: req.body.price
    }
    await Product.findByIdAndUpdate(iddd,newww)
    res.redirect('/index/products/')
  };

  module.exports.getBOX = async function (req, res) {
  const productss = await Product.find(); 
  let total = 0
  boxlist.forEach(element => {
    total = element.price + total
  });
  let floor = Math.floor(total)
    res.render("box", {
      productss,
      boxlist,
      floor
    });
  };

  module.exports.addToBox = async function (req, res) {
  const productss = await Product.find(); 
    const idd = req.params.id
    const idxx = productss.findIndex(prod=>prod._id == idd)
    const objj = productss.slice(idxx,idxx+1)
    boxlist.push(objj[0])

    res.redirect('/index/box/')

  };

module.exports.delCardFunc = async function (req, res) {
    const iddd = req.params.id
    const idxx = boxlist.findIndex(prod=>prod._id == iddd)
    boxlist.splice(idxx,1)
    res.redirect('/index/box/')
  };