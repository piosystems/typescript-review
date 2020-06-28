"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
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
node_fetch_1.default(`https://jsonplaceholder.typicode.com/todos`)
    .then(function (response) {
    return response.json();
})
    .then(function (array) {
    let data;
    data = array;
    let Todo = Object.assign(data); //relates the class to the data
    for (var i = 0; i < Todo.length; i++) {
        Todo[i].title = `This is title with id ${Todo[i].id}`;
    }
    console.log(Todo);
});
//# sourceMappingURL=index.js.map