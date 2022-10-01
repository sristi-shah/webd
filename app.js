const express=require('express');
const app=express();


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
app.listen(3000,()=>{
    console.log(`PORT 3000`)
});