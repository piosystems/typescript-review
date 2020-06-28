import * as request from "request";

 export const log = (output:any):void => {

    console.log(output);
}
export class TODO{
    //here we create the class that we later call into the index.ts file
    //The class then creates different objects with expected attributes 
    userId: number;
    id: number;
    title: string;
    completed: boolean;

    constructor(userId:number,id:number,title:string,completed:boolean = true){
        //this constructor enables the data gotten to be easily assigned to each attribute in each object.
        this.userId= userId;
        this.id= id;
        this.title= title;
        this.completed= completed;
    }
};
