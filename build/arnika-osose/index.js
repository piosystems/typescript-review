"use strict";
//let firstName: string;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
let my_todo = 'https://jsonplaceholder.typicode.com/todos/';
node_fetch_1.default(my_todo)
    .then(function (response) {
    return response.json(); //// return response as a JSON file format
})
    .then(function (nic_Json) {
    var data;
    data = nic_Json;
    let TODO;
    //// to assign the json values to TODO
    TODO = Object.assign(data);
    my_todo = TODO;
    //////to create the for loop for the Json file
    for (var x = 0; x < TODO.length; x++) {
        TODO[x].title = `This is title with ID: ${TODO[x].id}`; //// this is to keep changing the title for each item returned
    }
    console.log(TODO); //// to print the object to the screen
});
//# sourceMappingURL=index.js.map