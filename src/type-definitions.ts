export interface PersonData {
    firstName: string,
    lastName: string,
    gender: number,
    height?: number, //question mark here means optional
    hobbies: string[],
    birthday?: Date, //question mark here means optional
    isAlive: boolean
} 

export enum ModeOfEntry{
    UTME = 1,
    DirectEntry = 2,
    Transfer = 3
}
export enum Gender {
    female = 1,
    male = 2
}

//Prepare interface for student specific data. We could have extended PersonData here, but we will use them side by side
export interface StudentData{
    matriculationNumber: string,
    programOfStudy: string,
    department: string,
    yearOfEntry: Date,
    modeOfEntry: number,
    nextOfKin: string,
    emailAddress: string,
    phoneNumber?: string
} 