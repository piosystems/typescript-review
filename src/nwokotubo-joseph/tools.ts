
import * as request from "request";



 export const log = (output:any):void => {

    console.log(output);
 }
 //Create Interface to define the constructor.
 export interface IA{
    userId? : number;
    id? : number;
    title? : string
    completed: string;
}
export class TODO{
    //Set properties on private so I can use the interface to define the constructor
    private userId: number;
    private id: number;
    private title: string;
    private completed: boolean;

    //Now a new TODO only needs one arg. The data that should be passed into it.
    constructor(response: IA) {
        Object.assign(this, response) //Assign data properties to Class TODO
    }
}

    /*constructor(userId:number,id:number,title:string,completed:boolean = true){
        this.userId= userId;
        this.id= id;
        this.title= title;
        this.completed= completed;
    }
};*/


