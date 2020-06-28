"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TODO = exports.log = void 0;
exports.log = (output) => {
    console.log(output);
};
class TODO {
    constructor(userId, id, title, completed = true) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
exports.TODO = TODO;
;
//# sourceMappingURL=tools.js.map