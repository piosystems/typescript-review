"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const large_1 = require("./large");
const node_fetch_1 = __importDefault(require("node-fetch"));
let yuo = ('https://jsonplaceholder.typicode.com/todos');
node_fetch_1.default(yuo).then((response) => {
    response.json().then((data) => {
        let flow = large_1.Todo;
        for (let ralph = 0; ralph < data.length; ralph++)
            data[ralph].title = 'This is Todo with id number ' + data[ralph].id;
        large_1.logger(data);
        large_1.logger(flow);
    });
});
//# sourceMappingURL=first.js.map