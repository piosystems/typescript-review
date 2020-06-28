"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = __importDefault(require("./tools"));
const node_fetch_1 = __importDefault(require("node-fetch"));
let Todosurl = 'https://jsonplaceholder.typicode.com/todos/';
/**
fetch(Todosurl)
.then(Response => Response.json())
.then(data => logger(`Data: userId = ${data.userId}, id= ${data.id}, title = ${"This is Todo with id number" + data.id}, completed = ${data.completed}`))
.catch(Error => logger(`Error: ${Error}`));
*/
//get data from url
node_fetch_1.default(Todosurl)
    .then(function (response) {
    return response.json();
}).then(function (myJson) {
    let result = myJson;
    //let show =plainToClass(Todo, result)
    for (let id = 0; id < result.length; id++) {
        result[id].title = 'This is todo with id number ' + result[id].id;
    }
    tools_1.default(result);
});
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
//# sourceMappingURL=index.js.map