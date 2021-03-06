"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
const class_transformer_1 = require("class-transformer");
const todo_json_1 = __importDefault(require("./todo.json"));
/*
IGNORE THESE; INITIAL ATTEMPTS
let userId = 1
let id = 1
let title = "Go to market"
let completed = true

let item1 = new Todo(userId, id, [title], completed)

logger(`Item 1 is ${item1.title}`);
*/
/*
I had issues looping through fetch, so I tried something else. This is where I attempted fetch
let url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
 .then(response => response.json()) //convert data returned to json
 .then(data => logger(`UserID = ${data.userId}, ID = ${data.id}, Title = ${data.title}`)) //use the json data
 .catch(error => logger(`Error: ${error}`));

var todo = [url]
todo.forEach(instantiate);
*/
/*
var todo_list = new Array();
todo_list = require('todo.json');

for(var i = 0;i<todo_list.length;i++) {
    console.log(todo_list[i])
 }

//var item1 = todo_list[0]

//logger(todo_list);
*/
let todo_array = class_transformer_1.plainToClass(tools_1.Todo, todo_json_1.default);
for (var i = 0; i < todo_array.length; i++) {
    todo_array[i].title = `This is todo with id number ${todo_array[i].id}`;
}
tools_1.logger(todo_array);
//# sourceMappingURL=index.js.map