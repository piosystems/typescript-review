const logger = (output: any) => {
    console.log(output)
}

export class Todo{
    // declare properties
    userId: number;
    id: number;
    title: string;
    completed: boolean;

    constructor( userId: number, id: number, title: string, completed: boolean){
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed  = completed;

        
    }
};

export default logger;