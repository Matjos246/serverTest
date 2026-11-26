//  controller is simply logic and functions
//  Basically the goal of this page is to modularize all the functions to this pages .... eg router.get("/musicApi" , (req, res)=>{
//     res.send(musicApi)
// })

let message = " "
const ProductModel = require("../models/product.model");
const displayAllStudents=(req,res)=>{
     let allStudents = [{firstname: "Joshua", Lastname:"Akinola", course: 'Web development' },
    {firstname: "Akinola", Lastname:"Ayobami", course: 'Data Analysis'},
    {firstname: "Adeola", Lastname:"Adunke", course: 'Data Science'}
]
           res.send(allStudents)
}
const displayWorld=(req,res)=>{
     res.send('My World of Possibilities');
}

const displayEjs=(req,res)=>{
     res.render("engine", {username:"Akinola", gender:"male"})
}

const displayCreateProductpage=(req,res)=>{
     //  message=" "  
      res.render("createproductpage",{message})  
     
}
const displayMusicapi=(req,res)=>{
     let musicApi = [ 
    {id:1,  songImage:"https://health.clevelandclinic.org/how-does-music-affect-the-brain" , artistName: "Burna-boy", songtitle: "Somebody", songUrl: "https://www.youtube.com/watch?v=jUkcAa_IBU0"
    },
     {id:2,  songImage:"https://www.google.com/imgres?q=nathaniel&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab6761610000e5eb11de9e26d17433c5d960c15f&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Fartist%2F1ukmGETCwXTbgrTrkRDnmn&docid=GT-yoHg3bNO-eM&tbnid=Fpp7GuhhzsRKJM&vet=12ahUKEwj20ZSjiOiWAxVXUkEAHUEIIXAQnPAOegQIWRAA..i&w=640&h=640&hcb=2&ved=2ahUKEwj20ZSjiOiWAxVXUkEAHUEIIXAQnPAOegQIWRAA" , artistName: "Nathaniel-bassey", songtitle: "Imela", songUrl: "https://youtu.be/3x4wZoYSgks?si=lNSAgT4Pl8hNjh20"
    },
     {firstname: "Akinola", Lastname:"Ayobami", course: 'Data Analysis'},
    {firstname: "Adeola", Lastname:"Adunke", course: 'Data Science'}
]
       res.send(musicApi)
}

const displayPaid=(req,res)=>{
      res.status(200).send('Payment successful');
      alert(active)                                                           
}

const displayInfo=(req,res)=>{
    res.send('Fullstack web development')
}

const displayProductpage=(req,res)=>{
             ProductModel.find()
        .then((allProducts)=>{
            console.log(allProducts)
               // res.render("displayProductPage")
    res.render("displayProductpage",{allProducts})
        })
}

const path = require("path")

const displaySignin=(req,res)=>{
          res.sendFile(path.join(__dirname, "../SignIn.html")) 
             console.log(path.join(__dirname, "../SignIn.html"));
}

const displaySignUp=(req,res)=>{
          res.sendFile(path.join(__dirname, "../SignUp.html")) 
             console.log(path.join(__dirname, "../SignUp.html"));
}

const displayFakeapi=(req,res)=>{
      res.redirect('https://fakestoreapi.com/products');
}

const displayJoasyncsolutions=(req,res)=>{
     res.redirect('https://joasync-portfolio.vercel.app/')
}

const summitProduct=(req,res)=>{
           // res.render("createproductpage") 
    console.log("E don submit oooo");
    // next line enable us to save to an array after saying allProducts has been assign to empty array [] 
    // allProducts.push(req.body)
    console.log(req.body);
    // Now instead of saving to array rather to database by creating a form and its will be new instant model which takes in parameters (productname etc) which is already coming from req.body(if we console req.body what it will show are all this attributes) by saying 
    let form = new ProductModel(req.body)
    form.save()
    .then(()=>{
        console.log("its has saved oooo")
          message = "Product added Successfully !" 
          res.redirect("/product/createProduct")
    })
    .catch((err)=>{
            console.log(err,"it did not save oooo")
              message = "Product could not added Successfully !" 
              res.redirect("/product/createProduct")
    })
    // req is what the user typed by consoling the res or req it will show plenty info about it, both the one needed (this equally works like event and target in REACT )and not so to just filter out what needed(what the user typed) from the bunch of info given app.use()
    // console.log(req);
    // console.log(res);
}
// So for that displayWorld to be seen will have to export it and also bcus we have quite a bunch of function to export will export it as an Object
module.exports={displayWorld,displayEjs,displayCreateProductpage,displayProductpage, displayMusicapi,displayAllStudents, summitProduct,displayPaid, displayInfo,displaySignin,displaySignUp,displayFakeapi,displayJoasyncsolutions}