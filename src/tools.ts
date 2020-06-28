import { type } from "os";

const logger = (output: string | number) => {
    console.log(output);
}

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


export class Person{
    //declare property types
    firstName: string;
    lastName: string;
    gender: string;
    height: number | undefined;
    hobbies: string[];
    birthday: Date;
    isAlive: boolean;

    constructor(firstName: string, lastName: string, gender: string, height: number | undefined = undefined,
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



export default logger;