
export const log= (output:any):void => {

    console.log(output);
}

export class Todo{
    //declare property types
    userId: number;
    id: number;
    title: string;
    completed: boolean = true;



    constructor(userId: number, id: number, title: string, completed: boolean= true){
        this.userId= userId
        this.id= id
        this.title= title
        completed= completed
        }
   }; 