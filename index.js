// //index.js
// // required external modules
// const express=require('express');
// const path=require('path');

// // App variables
// const app=express();
// const PORT=process.env.PORT || "8000";


// // App Configuration
// app.set("views",path.join(__dirname,"views"));
// app.set("view engine","pug");
// app.use(express.static(path.join(__dirname,"public")));

// // routes Definitons
// app.get("/",(req,res)=>{
// 	res.render("index",{title:"Home"});
// });
// app.get("/user",(req,res)=>{
// 	res.render("user",{title:"Peofile",userProfile:{nickname:"Auth0"}});
// });
// // server activation
// app.listen(PORT,()=>{
// 	console.log(`listening to requests on ${PORT}`);
// })
const express=require('express');
const path=require('path');


const app=express();
const PORT=process.env.PORT || 8000;

app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");
app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
	res.render("index",{title:"Home"});
})
app.get('/user',(req,res)=>{
	res.render("user",{title:"profile",userProfile:{nickname:"Brad"}});
})

app.listen(PORT,()=>{
	console.log(`Server started on port ${PORT}`);
})