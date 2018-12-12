var element= document.getElementById('number');
element.innerHTML= 0;



function reset(){
   axios.get("/value").then(function(res){
        console.log(res);
        element.innerHTML=res.data;
    }).catch(function(err){
        console.log(err);
    });
}



function incrementButton(){
  
    axios.get(`/increment`).then(function(res){
        console.log(res)
        element.innerHTML=res.data;
    }).catch(function(err){
        console.log(err);
    });
    
}

function decrementButton(){
  
    axios.get("/decrement").then(function(res){
        console.log(res)
        element.innerHTML=res.data;
    }).catch(function(err){
        console.log(err);
    });

}



