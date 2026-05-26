console.log('My world ');
const express=require ('express')
const App = express();
let PORT= 5000;
let allStudents = [{firstname: "Joshua", Lastname:"Akinola", course: 'Web development' },
    {firstname: "Akinola", Lastname:"Ayobami", course: 'Data Analysis'},
    {firstname: "Adeola", Lastname:"Adunke", course: 'Data Science'}
]
//App.get (path,callback)
//http://localhost:5000 furthermore if open normal javascript or react and use fetch/axios, and type the address will definitely show what is the  RES. , like sending back a JSON 

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
//What is being creating here is known as API ENDPOINT Now API ENDPOINT FOR LOCALHOST 5000 so there is now API endpoint in express for localhost port 5000 "/" and localhost port 5000 '/Info' and also not only string can be pass/send array of obj can also be pass, moreover just as in react app we have to start a server using npm run dev, as well in node app, need to create that also to start a sserver in an express applications which start with using app.listen() which we can use node for the running of the js file , node index.js
App.listen(PORT,(err)=>{
    if(err){
        console.log("Oop...Error nti wa ooo");
    }else{
        console.log("Ope ooo, Server nti start");
    }
})
