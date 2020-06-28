"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
const fetch = require('node-fetch');
fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    var data;
    data = myJson;
    let todo1;
    //console.log(data);
    todo1 = tools_1.TODO;
    todo1 = Object.assign(data);
    // console.log(TODO)
    // console.log(newtodo) 
    // console.log(newtodo)
    for (var i = 0; i < todo1.length; i++) {
        todo1[i].title = `This is title with ID: ${todo1[i].id}`;
    }
    //console.log(newtodo[1].title ) 
    console.log(todo1);
});
//# sourceMappingURL=index.js.map