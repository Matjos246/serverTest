console.log('My world ');
const express=require ('express')
const ejs=require ('ejs')
const mongoose=require ('mongoose')
const App = express();
App.set("view engine","ejs")
let PORT= 5000;

//this there is a package called body parser use to do is that instead of displaying all what is in the req, when is being make use of , it will only display what is in .body and in older express ejs version it will have to be install unlike recent version which is now inbuilt and to initial it will say what in line 8 & 9
    App.use(express.urlencoded
        ({extended:true}))
        // Setup connection to the database and there is a inbuilt to mongoose which is mongoose.connect() and it takes two parameter, the first one is the url of the database and the second one is an object with some properties like useNewUrlParser:true, useUnifiedTopology:true

        // Mongoose connection to MongoDB Atlas
        // URL=uniform resource locator
        // URI=unifrom resource identifier
        let URI = "mongodb+srv://Matjos246:Ayobami96@cluster0.cxyjw.mongodb.net/Joasync_Database?appName=Cluster0"
        mongoose.connect(URI)
        // And the process is Asynchronous,meaning we have to either use Async and await or .then block so as to have access to know whether it has connected to the database if uses .then , we uses .catch block to track if there is error(and to able to successfully connected will have to be internet connected)
        .then(()=>{
            console.log("mongodb iyaf connect oooo");  
        })
        .catch((err)=>{
            console.log("mongodb no connect");  
        })
        // Product Schema
//declaration of constraint in the APP through creating of Schema
        const ProductSchema = mongoose.Schema({
            productName : {type:String,required:true},
            productPrice : {type:Number ,required:true},
            productQuantity  : {type:Number,required:true},
            productImage : {type:String , required:true},
            productDate : {type:String, default:Date.now() }
        })
        //  Then gives the constraint we just created a Model and what that will do is to assign name to the collections---- ProductModel and generally speaking a model is a representation of a product so that anytime need to create a product no need to call on productName,price,image and other attrbute by just give it model and just call on the assign model  which will be store in a name we use to assign here using ProductModel and mongoose.model takes in two parameters (name to call the attribute collection ofthe product and the scheme to use for the collection  )
        const ProductModel = mongoose.model("product_collections",ProductSchema)
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
//App.get (path,callback)
//http://localhost:5000 furthermore if open normal javascript or react and use fetch/axios, and type the address will definitely show what is the  RES. , like sending back a JSON 
let allProducts= []
let message = " "
App.get('/' , (req,res)=>{
    res.send('My World of Possibilities')
})
http://localhost:5000/Info
App.get('/Info', (req,res)=>{
    res.send('Fullstack web development')
})
http://localhost:5000/allStudents
App.get("/allStudents" , (req, res)=>{
    res.send(allStudents)
})
App.get("/musicApi" , (req, res)=>{
    res.send(musicApi)
})
App.get("/test",(req, res)=>{
      res.sendFile(__dirname+"/SignUp.html") 
     console.log(__dirname+"/SignUp.html");
})
App.get("/ejs",(req,res)=>{
    res.render("engine")
     res.render("engine",{username:"Akinola", gender:"male"})
})
App.get("/createproduct", (req, res)=>{
      res.render("createproductpage",{message}) 
      message = " " 
})
App.get("/displayProduct", (req, res)=>{
        ProductModel.find()
        .then((allProducts)=>{
            console.log(allProducts)
               // res.render("displayProductPage")
    res.render("displayProductpage",{allProducts})
        })
})
App.post("/submitProduct", (req, res)=>{
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
//                                   
//What is being creating here is known as API ENDPOINT Now API ENDPOINT FOR LOCALHOST 5000 so there is now API endpoint in express for localhost port 5000 "/" and localhost port 5000 '/Info' and also not only string can be pass/send array of obj can also be pass, moreover just as in react app we have to start a server using npm run dev, as well in node app, need to create that also to start a sserver in an express applications which start with using app.listen() which we can use node for the running of the js file , node index.js
App.listen(PORT,(err)=>{
    if(err){
        console.log("Oop...Error nti wa ooo");
    }else{
        console.log("Ope ooo, Server nti start");
    }
})
// To start server
// node test.js
// nodemon test.js or simply use nodemon
