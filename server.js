const express= require('express');
const app= express();

const port= 3000;

// app.get('/ping',function(req,res){
//     res.send("PONG");
// });

// app.listen(port);
let value = 0;
app.get('/increment',function(req,res,next){
   

    value = value+1;
     res.send(`${value}`);
 
    
});

app.get('/decrement',function(req,res,next){


    value = value-1;
    res.send(`${value}`);

   
});

app.get('/value',function(req,res,next){
    value = 0;
    res.send(`${value}`);
});

app.listen(port,function(){
console.log("listening...");
});



app.use(express.static('public'));

