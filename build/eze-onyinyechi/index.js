"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//fetching data from url
const node_fetch_1 = __importDefault(require("node-fetch"));
node_fetch_1.default(`https://jsonplaceholder.typicode.com/todos`)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    let data;
    data = myJson;
    //looping the array    
    let TODO = Object.assign(data);
    for (var i = 0; i < TODO.length; i++) {
        TODO[i].title = `This is title with iD ${TODO[i].id}`;
    }
    console.log(TODO);
});
//# sourceMappingURL=index.js.map