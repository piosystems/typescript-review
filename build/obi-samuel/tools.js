"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const logger = (output) => {
    console.log(output);
};
class Todo {
    constructor(userId, id, title, completed = true) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
exports.Todo = Todo;
;
exports.default = logger;
//# sourceMappingURL=tools.js.map