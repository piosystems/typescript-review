"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = exports.log = void 0;
exports.log = (output) => {
    console.log(output);
};
class Todo {
    constructor(userId, id, title, completed = true) {
        this.completed = true;
        this.userId = userId;
        this.id = id;
        this.title = title;
        completed = completed;
    }
}
exports.Todo = Todo;
;
//# sourceMappingURL=tools.js.map