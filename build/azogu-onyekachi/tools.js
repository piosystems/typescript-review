"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todo = exports.log = void 0;
exports.log = (output) => {
    console.log(output);
};
class todo {
    constructor(userId, id, title, completed = true) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
exports.todo = todo;
;
//# sourceMappingURL=tools.js.map