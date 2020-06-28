import fetch, {Response} from 'node-fetch';


fetch(`https://jsonplaceholder.typicode.com/todos`)
.then(function(response:any) {
    return response.json();
})

.then(function(jsonFile:any){
    let data:any
    data = jsonFile

    let Todo = Object.assign(data);
    
    for(var i = 0; i<Todo.length; i++){
      
        Todo[i].title = `This is title with iD ${Todo[i].id}`   
    }
   console.log(Todo) 

});


