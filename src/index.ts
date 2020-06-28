//let firstName: string;

//firstName = "Pius";
//firstName = 10;
/*
import logger, {Person} from './tools'


//Accessing object properties
const firstName = "Pius";
const lastName = "Onobhayedo";
const gender = "male";
const height = 1.7;
const hobbies = ['Tennis','Programming'];
const birthday = new Date(1900,4,5);
const isAlive = true;

const person1 = new Person(firstName, lastName, gender, height, 
    hobbies, birthday, isAlive)

logger(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()}`);
*/
/*
import logger, {Person}  from './tools'

const firstName = "Pius";
const lastName = "Onobhayedo";
const gender = "male";
const height = 1.7;
const hobbies = ['Tennis','Programming'];
const birthday = new Date(1900,4,5);
const isAlive = true;

const person1 = new Person(firstName, lastName, gender, height, 
    hobbies, birthday, isAlive)

logger(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()}`);
*/

import log from './tools'
import Student from './students';
import {PersonData, StudentData, Gender, ModeOfEntry} from './type-definitions'
import logger from './tools';

//Student registration
//prepare personal data
const student1PersonalData: PersonData = {
    firstName: "Mary",
    lastName: "Ota",
    gender: Gender.female,
    hobbies: ['Work','Pray','Play'],
    isAlive: true
}
//prepare student data
const student1StudentData: StudentData = {
    department: "information science and media studies",
    matriculationNumber: "234234",
    modeOfEntry: ModeOfEntry.UTME,
    programOfStudy: "Information Science and Media Studies",
    yearOfEntry: new Date(),
    nextOfKin: "Mr & Mrs Ota",
    emailAddress: "mary.ota@pau.edu.ng"
}
//instantiate the new student
const student1 = new Student(student1StudentData, student1PersonalData)

//access the new student’s data
logger(`The Student 1 named ${student1.getFullName()} with matriculation number ${student1.matriculationNumber} <br/>
belongs to the department ${student1.department}. The height is ${student1.height}`);

//add height to student1
student1.height = 1.7;

logger(`The Student 1 named ${student1.getFullName()} with matriculation number ${student1.matriculationNumber} <br/>
belongs to the department of ${student1.department}. The height is ${student1.height}`);
