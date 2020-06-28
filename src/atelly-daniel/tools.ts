
import * as request from "request";



 export const log = (output:any):void => {

    console.log(output);
}
export class ClassTODO{
    userId: number;
    id: number;
    title: string;
    completed: boolean;

    constructor(userId:number,id:number,title:string,completed:boolean = true){
        this.userId= userId;
        this.id= id;
        this.title= title;
        this.completed= completed;
    }
};


