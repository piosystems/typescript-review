"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(personData) {
        this.toTitleCase = (str) => {
            str.toLowerCase(); //first set the whole string to lowercase in case
            return str.substring(0, 0) + str[0].toUpperCase() + str.substring(1); //replace the first character with its uppercase
        };
        this._firstName = personData.firstName;
        this._lastName = personData.lastName;
        this._gender = personData.gender;
        this._height = personData.height;
        this._hobbies = personData.hobbies;
        this._birthday = personData.birthday;
        this._isAlive = personData.isAlive;
    }
    get firstName() {
        return `${this.toTitleCase(this._firstName)}`;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return `${this.toTitleCase(this._lastName)}`;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get hobbies() {
        return this._hobbies;
    }
    set hobbies(value) {
        this._hobbies = value;
    }
    get birthday() {
        return this._birthday;
    }
    set birthday(value) {
        this._birthday = value;
    }
    get isAlive() {
        return this._isAlive;
    }
    set isAlive(value) {
        this._isAlive = value;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
exports.default = Person;
;
//# sourceMappingURL=person.js.map