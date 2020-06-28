"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
const logger = (output) => {
    console.log(output);
};
class student {
    constructor(userID, id, title, complete = true) {
        this.userid = userID;
        this.id = id;
        this.title = title;
        this.complete = complete;
    }
}
exports.student = student;
exports.default = logger;
//# sourceMappingURL=tools.js.map