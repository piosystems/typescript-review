"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TODO = exports.log = void 0;
exports.log = (output) => {
    console.log(output);
};
class TODO {
    //Now a new TODO only needs one arg. The data that should be passed into it.
    constructor(response) {
        Object.assign(this, response); //Assign data properties to Class TODO
    }
}
exports.TODO = TODO;
/*constructor(userId:number,id:number,title:string,completed:boolean = true){
    this.userId= userId;
    this.id= id;
    this.title= title;
    this.completed= completed;
}
};*/
//# sourceMappingURL=tools.js.map