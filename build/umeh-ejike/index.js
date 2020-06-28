"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = __importStar(require("./tools"));
const fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then(function (json) {
    let data = json;
    let TODO = tools_1.Todo;
    //create for loop than will loop through array
    for (let x = 0; x < data.length; x++) {
        data[x].title = 'This is todo with id number ' + data[x].id;
    }
    tools_1.default(data);
});
/*let myMap = new Map([
    ["ejike", "umeh"]
])

for(let [key,value] of myMap.entries()){
    logger(`${key} -> ${value}`);
    let person1 = new Todo(1,6,'wewdwde', false)
logger(person1)


}*/ 
//# sourceMappingURL=index.js.map