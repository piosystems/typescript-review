const logger = (output: any) => {
    console.log(output);
}
/** 
export interface userData{
    userID: number,
    id: number,
    title: string ,
    complete: boolean
}
export class user{
    userID: number;
    id: number;
    title: string;
    complete: boolean;

    constructor(userData: userData){
        this.userID = userData.userID;
        this.id = userData.id;
        this.title = userData.title;
        this.complete = userData.complete;
    }
};

export default logger;
*/
export class todo{
    userID: number;
    id: number;
    title: string;
    complete: boolean;

    constructor(userID: number, id: number, title: string,
        complete: boolean =true){
            this.userID = userID;
            this.id = id;
            this.title = title;
            this.complete = complete;
        }
};

export interface todo{
    userID: number;
    id: number;
    title: string;
    complete: boolean;
}

export default logger;

/** 
 export class User{
    userID: number;
    id: number;
    title: string;
    complete: boolean;

    setTitle() {
        return "This is To do with Id" + this.id;
    }
 }
 */