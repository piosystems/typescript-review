const logger = (output: any) => {
    console.log(output);
}

export class student{
    userid:number;
    id: number;
    title: string;
    complete: boolean;

    constructor(userID: number, id: number, title: string,
        complete: boolean =true){
            this.userid = userID;
            this.id = id;
            this.title = title;
            this.complete = complete;
        }

   


   


} 

export default logger