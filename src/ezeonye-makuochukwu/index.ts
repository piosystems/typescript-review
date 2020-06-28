import {TODO} from './tools'


const fetch = require('node-fetch');
fetch(`https://jsonplaceholder.typicode.com/todos`)
.then(function(response:any) {
    return response.json();
})
.then(function(myJson:any){
    var data:any
    data = myJson
    let todo1:any
    
    //console.log(data);
    
    todo1=TODO;
    todo1=Object.assign(data);
   // console.log(TODO)
   // console.log(newtodo) 
   // console.log(newtodo)
    for(var i = 0; i< todo1.length; i++){
      
        todo1[i].title = `This is title with ID: ${todo1[i].id}`
    
        
    }
    //console.log(newtodo[1].title ) 
   console.log(todo1) 


});
