import {todo} from './tools'


const fetch = require('node-fetch');
fetch(`https://jsonplaceholder.typicode.com/todos`)
.then(function(response:any) {
    return response.json();
})
.then(function(myJson:any){
    var info:any
    info = myJson
    let todos:any
    
    
    todos=todo;
    todos=Object.assign(info);
    for(var a = 0; a< todos.length; a++){
      
        todos[a].title = `This is todos with id: ${todos[a].id}`
    
        
    }
   console.log(todos) 


});
