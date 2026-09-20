console.log('My world ');
const express=require ('express')
const App = express();
App.set("view engine","ejs")
let PORT= 5000;

//this there is a package called body parser use to do is that instead of displaying all what is in the req, when is being make use of , it will only display what is in .body and in older express ejs version it will have to be install unlike recent version which is now inbuilt and to initial it will say what in line 8 & 9
    App.use(express.urlencoded
        ({extended:true}))
      
    
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
App.get("/createProduct", (req, res)=>{
      res.render("createproductpage",{message}) 
      message = " " 

})
App.post("/submitProduct", (req, res)=>{
    // res.render("createproductpage") 
    console.log("E don submit oooo");

    // next line enable us to save to an array after saying allProducts has been assign to empty array [] 
    allProducts.push(req.body)
    console.log(req.body);
    message = "Product added Successfully !"  
    // req is what the user typed by consoling the res or req it will show plenty info about it, both the one needed (this equally works event and target in REACT )and not so to just filter out what needed(what the user typed) from the bunch of info given app.use()
    // console.log(req);
    // console.log(res);
    res.redirect("/createProduct")

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