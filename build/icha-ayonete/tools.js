"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todo = void 0;
const logger = (output) => {
    console.log(output);
};
/**
export interface userData{
    userID: number,
    id: number,
    title: string ,
    complete: boolean
}
export class user{
    userID: number;
    id: number;
    title: string;
    complete: boolean;

    constructor(userData: userData){
        this.userID = userData.userID;
        this.id = userData.id;
        this.title = userData.title;
        this.complete = userData.complete;
    }
};

export default logger;
*/
class todo {
    constructor(userID, id, title, complete = true) {
        this.userID = userID;
        this.id = id;
        this.title = title;
        this.complete = complete;
    }
}
exports.todo = todo;
;
exports.default = logger;
/**
 export class User{
    userID: number;
    id: number;
    title: string;
    complete: boolean;

    setTitle() {
        return "This is To do with Id" + this.id;
    }
 }
 */ 
//# sourceMappingURL=tools.js.map