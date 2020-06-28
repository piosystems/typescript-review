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

export const logger = (output:any):void => {

    console.log(output)
}
export class TODO{
    user_id: number;
    Id: number;
    title: string;
    completed: boolean;


    constructor(user_id:number, Id:number, title:string, completed:boolean = true){
        this.user_id = user_id;
        this.Id = Id;
        this.title = title;
        this.completed = completed;
    }
};

export interface TODO{
    user_id: number;
    Id: number;
    title: string;
    complete: boolean;
}

export default logger; 