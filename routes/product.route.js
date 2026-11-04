// First import express and router bcus express is what handle our route by  then we create router out of it  (const router =  express.Router()) so as to 
// defining productmodel to be able to use it in the product.route.js file
const ProductModel = require("../models/product.model")
const express = require ("express");
const router =  express.Router()
let message = " "

let allStudents = [{firstname: "Joshua", Lastname:"Akinola", course: 'Web development' },
    {firstname: "Akinola", Lastname:"Ayobami", course: 'Data Analysis'},
    {firstname: "Adeola", Lastname:"Adunke", course: 'Data Science'}
]


let musicApi = [ 
    {id:1,  songImage:"https://health.clevelandclinic.org/how-does-music-affect-the-brain" , artistName: "Burna-boy", songtitle: "Somebody", songUrl: "https://www.youtube.com/watch?v=jUkcAa_IBU0"
    },
     {id:2,  songImage:"https://www.google.com/imgres?q=nathaniel&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab6761610000e5eb11de9e26d17433c5d960c15f&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Fartist%2F1ukmGETCwXTbgrTrkRDnmn&docid=GT-yoHg3bNO-eM&tbnid=Fpp7GuhhzsRKJM&vet=12ahUKEwj20ZSjiOiWAxVXUkEAHUEIIXAQnPAOegQIWRAA..i&w=640&h=640&hcb=2&ved=2ahUKEwj20ZSjiOiWAxVXUkEAHUEIIXAQnPAOegQIWRAA" , artistName: "Nathaniel-bassey", songtitle: "Imela", songUrl: "https://youtu.be/3x4wZoYSgks?si=lNSAgT4Pl8hNjh20"
    },
     {firstname: "Akinola", Lastname:"Ayobami", course: 'Data Analysis'},
    {firstname: "Adeola", Lastname:"Adunke", course: 'Data Science'}
]


// Creating of Express Routes
router.get('/' , (req,res)=>{
    res.send('My World of Possibilities')
})
http://localhost:5000/Info
router.get('/Info', (req,res)=>{
    res.send('Fullstack web development')
})
http://localhost:5000/allStudents
router.get("/allStudents" , (req, res)=>{
    res.send(allStudents)
})
router.get("/musicApi" , (req, res)=>{
    res.send(musicApi)
})
// router.get("/SignUp",(req, res)=>{
//       res.sendFile(__dirname+"/SignUp.html") 
//      console.log(__dirname+"/SignUp.html");
// })

router.get("/SignIn",(req, res)=>{
      res.sendFile(__dirname+"/SignIn.html") 
     console.log(__dirname+"/SignIn.html");
})

router.get("/ejs",(req,res)=>{
    // res.render("engine")
     res.render("engine",{username:"Akinola", gender:"male"})
})
router.get("/createproduct", (req, res)=>{
      res.render("createproductpage",{message}) 
      message=" " 
})
router.get("/displayProduct", (req, res)=>{
    // So to fetch all the products from the database by calling on it model--- ProductModel.find() if not will be displayproduct page will be fetching it from the empty Array, More queries like these are on mongodb documentations and mongoose documentations, and the .then block is to handle the asynchronous nature of the ProductModel.find() and it takes in a parameter which is the result of the query which is allProducts and then we can console.log it to see what is in it and then we can render it to the displayProductpage by passing it as an object with key allProducts and value allProducts
        ProductModel.find()
        .then((allProducts)=>{
            console.log(allProducts)
               // res.render("displayProductPage")
    res.render("displayProductpage",{allProducts})
        })
})
router.get('/fakeapi', (req, res) => {
    res.redirect('https://fakestoreapi.com/products');
});
router.get("/joasyncsolutions", (req, res)=>{
    res.redirect('https://joasync-portfolio.vercel.app/')
})
// res.status() is an Express response METHOD that sets the HTTP status code your server sends back to the client.
router.get('/paid', (req, res) => {
    res.status(200).send('Payment successful');
});
router.post("/submitProduct", (req, res)=>{
    // res.render("createproductpage") 
    console.log("E don submit oooo");
    // next line enable us to save to an array after saying allProducts has been assign to empty array [] 
    allProducts.push(req.body)
    console.log(req.body);
    // Now instead of saving to array rather to database by creating a form and its will be new instant model which takes in parameters (productname etc) which is already coming from req.body(if we console req.body what it will show are all this attributes) by saying 
    let form = new ProductModel(req.body)
    form.save()
    .then(()=>{
        console.log("its has saved oooo")
          message = "Product added Successfully !" 
          res.redirect("/createProduct")
    })
    .catch((err)=>{
            console.log(err,"it did not save oooo")
              message = "Product could not added Successfully !" 
              res.redirect("/createProduct")
    })
    // req is what the user typed by consoling the res or req it will show plenty info about it, both the one needed (this equally works like event and target in REACT )and not so to just filter out what needed(what the user typed) from the bunch of info given app.use()
    // console.log(req);
    // console.log(res);
})

   // To handle our routing will use  App.use() , then have to export it, using module.exports = router for    App.use("/product",) in the server page to have access to it
module.exports = router