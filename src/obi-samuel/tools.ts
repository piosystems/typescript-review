const logger = (output: string | number) => {
    console.log(output);
}

export class Todo{ 
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    
    constructor(userId: number, id: number, title: string, completed: boolean = true){ 
        this.userId = userId;
        this.id = id;
        this.title = title; 
        this.completed = completed; 
    } 
};
export default logger;