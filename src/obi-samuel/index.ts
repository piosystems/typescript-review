import logger, {Todo} from './tools';
import fetch, {Response} from 'node-fetch';

/*
//Not working properly
let url = 'https://jsonplaceholder.typicode.com/todos';
fetch(url).then((response) => {
    response.json().then((data) => {
        logger(data);
    }).catch((error) => {
        logger(error);
    })
}).catch((error) =>{
    logger(error);
})*/

fetch(`https://jsonplaceholder.typicode.com/todos`)
.then(function(response:any) {
    return response.json();
})

.then(function(array:any){
    let data:any
    data = array

    let Todo = Object.assign(data);//relates the class to the data

    for(var i = 0; i<Todo.length; i++){
        Todo[i].title = `This is title with id ${Todo[i].id}`
    }
    console.log(Todo)
});