
import logger, {todo} from './tools';
import fetch, { Response } from 'node-fetch'


let Todosurl = 'https://jsonplaceholder.typicode.com/todos/';

/** 
fetch(Todosurl)
.then(Response => Response.json())
.then(data => logger(`Data: userId = ${data.userId}, id= ${data.id}, title = ${"This is Todo with id number" + data.id}, completed = ${data.completed}`))
.catch(Error => logger(`Error: ${Error}`));
*/

//get data from url


fetch(Todosurl)
.then(function(response: any){
    return response.json();
}).then(function(myJson: any){
    let result:any = myJson
//let show =plainToClass(Todo, result)
    for(let id = 0; id<result.length; id++){
        result[id].title = 'This is todo with id number ' + result[id].id
    }
    logger(result)
})

/** 
fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'this is todo with id '
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))



*/

















/**
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'this is todo with id '
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
       */