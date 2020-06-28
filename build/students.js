"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
class Student extends person_1.default {
    constructor(studentData, personData) {
        super(personData); //inheritance. Pass personData to the superclass.
        this._department = studentData.department;
        this._emailAddress = studentData.emailAddress;
        this._matriculationNumber = studentData.matriculationNumber;
        this._modeOfEntry = studentData.modeOfEntry;
        this._nextOfKin = studentData.nextOfKin;
        this._phoneNumber = studentData.phoneNumber;
        this._programOfStudy = studentData.programOfStudy;
        this._yearOfEntry = studentData.yearOfEntry;
    }
    get matriculationNumber() {
        return this._matriculationNumber;
    }
    set matriculationNumber(value) {
        this._matriculationNumber = value;
    }
    get programOfStudy() {
        return this._programOfStudy;
    }
    set programOfStudy(value) {
        this._programOfStudy = value;
    }
    get department() {
        return this.toTitleCase(this._department);
    }
    set department(value) {
        this._department = value;
    }
    get yearOfEntry() {
        return this._yearOfEntry;
    }
    set yearOfEntry(value) {
        this._yearOfEntry = value;
    }
    get modeOfEntry() {
        return this._modeOfEntry;
    }
    set modeOfEntry(value) {
        this._modeOfEntry = value;
    }
    get nextOfKin() {
        return this._nextOfKin;
    }
    set nextOfKin(value) {
        this._nextOfKin = value;
    }
    get emailAddress() {
        return this._emailAddress;
    }
    set emailAddress(value) {
        this._emailAddress = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
}
exports.default = Student;
//# sourceMappingURL=students.js.map