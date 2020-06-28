import {logger, Todo} from './large';
import fetch from 'node-fetch'


let yuo = ('https://jsonplaceholder.typicode.com/todos')


fetch(yuo).then((response)=>{
  response.json().then(
         (data) => {
           let flow:any = Todo
          for (let ralph = 0; ralph< data.length; ralph++)
          data[ralph].title = 'This is Todo with id number '+ data[ralph].id

      logger(data)
      
      logger(flow)
  }

)})


