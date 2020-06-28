import {todos} from './todos'
export default class Todo implements todos{
    userId: number;
    id: number;
    title: string;
    completed: boolean;


constructor(Todo: { userId: number; id: number; title: string; completed: boolean; }){
   this.userId = Todo.userId;
    this.id = Todo.id;
    this.title =Todo.title;
    this.completed =Todo.completed;
}
    }
