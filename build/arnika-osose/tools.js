"use strict";
///const logger = (output: any) => {
///console.log(output)
///}
////codes are problmetaic in typescript because the variables weren't given a type
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
   }; */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TODO = exports.logger = void 0;
/* export class Person{
//declare property types
firstName: string;
lastName: string;
gender: string;
height: number;
hobbies: string[];
birthday: Date;
isAlive: boolean;

constructor(firstName: string, lastName: string, gender: string, height: number = -1,
hobbies: string[] = [], birthday: Date, isAlive: boolean = true){
this.firstName = firstName;
this.lastName = lastName;
this.gender = gender;
this.height = height;
this.hobbies = hobbies;
this.birthday = birthday;
this.isAlive = isAlive;
}
};

export default logger; */
////                               CONTINOUS ASSESSMENT               //////////
/// defined classes while giving each attribute it's corresponding data type
exports.logger = (output) => {
    console.log(output);
};
class TODO {
    constructor(user_id, Id, title, completed = true) {
        this.user_id = user_id;
        this.Id = Id;
        this.title = title;
        this.completed = completed;
    }
}
exports.TODO = TODO;
;
exports.default = exports.logger;
//# sourceMappingURL=tools.js.map