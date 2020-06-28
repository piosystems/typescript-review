import {StudentData, PersonData} from './type-definitions'
import Person from './person';

export default class Student extends Person{ //this is inheritance
    private _matriculationNumber: string;
    public get matriculationNumber(): string {
        return this._matriculationNumber;
    }
    public set matriculationNumber(value: string) {
        this._matriculationNumber = value;
    }

    private _programOfStudy: string;
    public get programOfStudy(): string {
        return this._programOfStudy;
    }
    public set programOfStudy(value: string) {
        this._programOfStudy = value;
    }

    private _department: string;
    public get department(): string {
        return this.toTitleCase(this._department);
    }
    public set department(value: string) {
        this._department = value;
    }

    private _yearOfEntry: Date;
    public get yearOfEntry(): Date {
        return this._yearOfEntry;
    }
    public set yearOfEntry(value: Date) {
        this._yearOfEntry = value;
    }
    private _modeOfEntry: number;
    public get modeOfEntry(): number {
        return this._modeOfEntry;
    }
    public set modeOfEntry(value: number) {
        this._modeOfEntry = value;
    }

    private _nextOfKin: string;
    public get nextOfKin(): string {
        return this._nextOfKin;
    }
    public set nextOfKin(value: string) {
        this._nextOfKin = value;
    }

    private _emailAddress: string;
    public get emailAddress(): string {
        return this._emailAddress;
    }
    public set emailAddress(value: string) {
        this._emailAddress = value;
    }

    private _phoneNumber: string | undefined;
    public get phoneNumber(): string | undefined {
        return this._phoneNumber;
    }
    public set phoneNumber(value: string | undefined) {
        this._phoneNumber = value;
    }

    constructor(studentData: StudentData, personData: PersonData){
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
}
