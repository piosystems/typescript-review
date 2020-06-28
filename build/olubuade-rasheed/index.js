"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    constructor(userId, id, title, completed = true) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
;
const fetch = require('node-fetch');
fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    let data;
    data = myJson;
    //console.log(data);
    let todo1 = Object.assign(Todo, data);
    // console.log(TODO)
    // console.log(newtodo) 
    // console.log(newtodo)
    for (var i = 0; i < todo1.length; i++) {
        todo1[i].title = `This is title with iD ${todo1[i].id}`;
    }
    //console.log(newtodo[1].title ) 
    console.log(todo1);
});
//# sourceMappingURL=index.js.map