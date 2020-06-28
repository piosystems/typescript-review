"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = exports.logger = void 0;
exports.logger = (output) => {
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
//# sourceMappingURL=tools.js.map