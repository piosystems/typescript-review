"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassTODO = exports.log = void 0;
exports.log = (output) => {
    console.log(output);
};
class ClassTODO {
    constructor(userId, id, title, completed = true) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
exports.ClassTODO = ClassTODO;
;
//# sourceMappingURL=tools.js.map