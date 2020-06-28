"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const logger = (output) => {
    console.log(output);
};
/*
export class Person{
    constructor(firstName, lastName, gender, height, hobbies, birthday, isAlive){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.height = height;
    this.hobbies = hobbies;
    this.birthday = birthday;
    this.isAlive = isAlive;
    }
   };
*/
class Person {
    constructor(firstName, lastName, gender, height = undefined, hobbies = [], birthday, isAlive = true) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
        this.hobbies = hobbies;
        this.birthday = birthday;
        this.isAlive = isAlive;
    }
}
exports.Person = Person;
;
exports.default = logger;
//# sourceMappingURL=tools.js.map