"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = __importDefault(require("./tools"));
const node_fetch_1 = __importDefault(require("node-fetch"));
let damisurl = 'https://jsonplaceholder.typicode.com/todos';
node_fetch_1.default(damisurl)
    .then(function (Response) {
    return Response.json();
})
    .then(function (myJson) {
    let data = myJson;
    let DAMI = damisurl;
    for (let x = 0; x < data.length; x++) {
        data[x].title = 'This id todo with id number' + data[x].id;
    }
    tools_1.default(data);
});
//# sourceMappingURL=index.js.map