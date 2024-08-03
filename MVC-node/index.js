const express = require('express');
const connectDb = require('./database/db');
const userroute = require('./router/userroute');
const app = express();
const port = 3040;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to the API!");
})

app.use("/user",userroute);
app.listen(port , ()=> {
    console.log(`server run on port ${port}`);
    connectDb();
});