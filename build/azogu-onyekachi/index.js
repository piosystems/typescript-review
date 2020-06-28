"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
const fetch = require('node-fetch');
fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    var info;
    info = myJson;
    let todos;
    todos = tools_1.todo;
    todos = Object.assign(info);
    for (var a = 0; a < todos.length; a++) {
        todos[a].title = `This is todos with id: ${todos[a].id}`;
    }
    console.log(todos);
});
//# sourceMappingURL=index.js.map