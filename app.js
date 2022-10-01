const dotenv=require('dotenv');
;const express=require('express');
const mongoose=require('mongoose');
const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn')
const PORT=process.env.PORT;

// const User= require('./model/userSchema');


// MIDDLEWARE
const middleware=(req,res,next)=>{
    console.log(`HELLO MIDDLEWARE`);
    next();
}
// middleware();


app.get('/',(req,res)=> {
    res.send(`HELLO WORLD`)
});
app.get('/about',middleware,(req,res)=> {
    console.log(`ABOUT PAGE`);
    res.send(`ABOUT`)
});
app.get('/contact',(req,res)=> {
    res.send(`CONTACT`)
});
// console.log(`welcome`);
app.listen(PORT,()=>{
    console.log(`PORT ${PORT}`)
});