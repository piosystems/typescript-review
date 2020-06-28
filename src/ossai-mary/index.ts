
 class TODO{
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
}

const fetch=require('node-fetch');
fetch(`https://jsonplaceholder.typicode.com/todos`)
.then(function(response:any) {
    return response.json();
})
.then(function(myJson:any){
    let data:any
    data = myJson
 
    //console.log(data);
   
     let girlPower = Object.assign(data,TODO);
   // console.log(TODO)
   // console.log(newtodo) 
   // console.log(newtodo)
    for(var i = 0; i<girlPower.length; i++){
      
        girlPower[i].title = `This is title with iD ${girlPower[i].id}`
    
    
    }
    //console.log(newtodo[1].title ) 
      console.log(girlPower) 


});
