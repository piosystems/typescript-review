"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
node_fetch_1.default(`https://jsonplaceholder.typicode.com/todos`)
    .then(function (response) {
    return response.json();
})
    .then(function (jsonFile) {
    let data;
    data = jsonFile;
    let Todo = Object.assign(data);
    for (var i = 0; i < Todo.length; i++) {
        Todo[i].title = `This is title with iD ${Todo[i].id}`;
    }
    console.log(Todo);
});
//# sourceMappingURL=index.js.map