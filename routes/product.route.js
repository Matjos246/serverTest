// First import express and router bcus express is what handle our route by  then we create router out of it  (const router =  express.Router()) so as to 
// defining productmodel to be able to use it in the product.route.js file
const { displayWorld, displayEjs, displayCreateProductpage,displayProductpage, displayMusicapi,displayAllStudents,summitProduct } = require("../controllers/product.controller");
const ProductModel = require("../models/product.model")
const express = require ("express");
const router =  express.Router()
// let message = " "
// Creating of Express Routes
router.get('/' , displayWorld)
http://localhost:5000/Info
router.get('/Info', (req,res)=>{
    res.send('Fullstack web development')
})


http://localhost:5000/allStudents
router.get("/allStudents",displayAllStudents)
router.get("/musicApi" , displayMusicapi)
// router.get("/SignUp",(req, res)=>{
//       res.sendFile(__dirname+"/SignUp.html") 
//      console.log(__dirname+"/SignUp.html");
// })

router.get("/SignIn",(req, res)=>{
      res.sendFile(__dirname+"/SignIn.html") 
     console.log(__dirname+"/SignIn.html");
})

router.get("/ejs",displayEjs)
router.get("/createproduct", displayCreateProductpage)
router.get("/displayProduct", displayProductpage)
    // So to fetch all the products from the database by calling on it model--- ProductModel.find() if not will be displayproduct page will be fetching it from the empty Array, More queries like these are on mongodb documentations and mongoose documentations, and the .then block is to handle the asynchronous nature of the ProductModel.find() and it takes in a parameter which is the result of the query which is allProducts and then we can console.log it to see what is in it and then we can render it to the displayProductpage by passing it as an object with key allProducts and value allProducts
router.get('/fakeapi', (req, res) => {
    res.redirect('https://fakestoreapi.com/products');
});
router.get("/joasyncsolutions", (req, res)=>{
    res.redirect('https://joasync-portfolio.vercel.app/')
})
// res.status() is an Express response METHOD that sets the HTTP status code your server sends back to the client.
router.get('/paid', (req, res) => {
    res.status(200).send('Payment successful');
    alert(active)
    
});
router.post("/submitProduct",summitProduct)
   // To handle our routing will use  App.use() , then have to export it, using module.exports = router for    App.use("/product",) in the server page to have access to it
module.exports = router
// Controller is simply just logic and functions , if our code is being check here at the server is still quite long , reason being that is still pretty long containing more than route i.e route.get its also contain functions like 