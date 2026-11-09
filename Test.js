console.log('My world ');
const express=require ('express')
const ejs=require ('ejs')
const mongoose=require ('mongoose')
const App = express();
const ProductModel = require("./models/product.model")
App.set("view engine","ejs")
let PORT= 5000;
//this there is a package called body parser use to do is that instead of displaying all what is in the req, when is being make use of , it will only display what is in .body and in older express ejs version it will have to be install unlike recent version which is now inbuilt and to initial it.
    App.use(express.urlencoded
        ({extended:true}))
        // Setup connection to the database and there is a inbuilt to mongoose which is mongoose.connect() and it takes two parameter, the first one is the url of the database and the second one is an object with some properties like useNewUrlParser:true, useUnifiedTopology:true

        // just like in routing like SQI web app for example, like having /admin/students... Now that all the routing  have now move from server(Test.js) to product.route.js also envelop with folder name routes  then will have something similar to /product/items

        // App.use()

        // Mongoose connection to MongoDB Atlas
        // URL=uniform resource locator
        // URI=unifrom resource identifier
        let URI = "mongodb+srv://Matjos246:Ayobami96@cluster0.cxyjw.mongodb.net/Joasync_Database?appName=Cluster0"

        // To handle our routing will use  App.use() , then have to export it, using module.exports = router  to have access to it and will also have to import it there too using require( ) and can store it in any variable for reuseability
            const ProductRouter= require("./routes/product.route")

            // Middleware
        App.use("/product", ProductRouter)

        mongoose.connect(URI)
        // And the process is Asynchronous,meaning we have to either use Async and await or .then block so as to have access to know whether it has connected to the database if uses .then , we uses .catch block to track if there is error(and to able to successfully connected will have to be internet connected)
        .then(()=>{
            console.log("mongodb iyaf connect oooo");  
        })
        .catch((err)=>{
            console.log("mongodb no connect");  
        })

        App.get("/SignUp",(req, res)=>{
      res.sendFile(__dirname+"/SignUp.html") 
     console.log(__dirname+"/SignUp.html");
})

// let allStudents = [{firstname: "Joshua", Lastname:"Akinola", course: 'Web development' },
//     {firstname: "Akinola", Lastname:"Ayobami", course: 'Data Analysis'},
//     {firstname: "Adeola", Lastname:"Adunke", course: 'Data Science'}
// ]
// let musicApi = [ 
//     {id:1,  songImage:"https://health.clevelandclinic.org/how-does-music-affect-the-brain" , artistName: "Burna-boy", songtitle: "Somebody", songUrl: "https://www.youtube.com/watch?v=jUkcAa_IBU0"
//     },
//      {id:2,  songImage:"https://www.google.com/imgres?q=nathaniel&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab6761610000e5eb11de9e26d17433c5d960c15f&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Fartist%2F1ukmGETCwXTbgrTrkRDnmn&docid=GT-yoHg3bNO-eM&tbnid=Fpp7GuhhzsRKJM&vet=12ahUKEwj20ZSjiOiWAxVXUkEAHUEIIXAQnPAOegQIWRAA..i&w=640&h=640&hcb=2&ved=2ahUKEwj20ZSjiOiWAxVXUkEAHUEIIXAQnPAOegQIWRAA" , artistName: "Nathaniel-bassey", songtitle: "Imela", songUrl: "https://youtu.be/3x4wZoYSgks?si=lNSAgT4Pl8hNjh20"
//     },
//      {firstname: "Akinola", Lastname:"Ayobami", course: 'Data Analysis'},
//     {firstname: "Adeola", Lastname:"Adunke", course: 'Data Science'}
// ]
//App.get (path,callback)
//http://localhost:5000 furthermore if open normal javascript or react and use fetch/axios, and type the address will definitely show what is the  RES. , like sending back a JSON 
let allProducts= []
let message = " "

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


// Controller is simply just logic and functions , if our code is being check here at the server is still quite long , reason being that is still pretty long containing more than route i.e route.get its also contain functions like 


// App.listen(PORT, callback)
// App.get(Path,callback)