"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(exports, "__esModule", { value: true });
class TODO {
    constructor(userId, id, title, completed = true) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    let data;
    data = myJson;
    //console.log(data);
    let TODO = Object.assign(data);
    // console.log(TODO)
    // console.log(newtodo) 
    // console.log(newtodo)
    for (var i = 0; i < TODO.length; i++) {
        TODO[i].title = `This is title with iD ${TODO[i].id}`;
    }
    //console.log(newtodo[1].title ) 
    console.log(TODO);
});
//# sourceMappingURL=index.js.map