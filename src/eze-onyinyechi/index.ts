import log from './tools';
import TODO from './todos';
//fetching data from url
 import fetch, {response} from 'node-fetch';
 fetch(`https://jsonplaceholder.typicode.com/todos`)
 .then(function(response:any) {
     return response.json();
 })
 .then(function(myJson:any){
     let data:any
     data = myJson
  

//looping the array    
      let TODO = Object.assign(data);
     for(var i = 0; i<TODO.length; i++){
       
         TODO[i].title = `This is title with iD ${TODO[i].id}`
     
         
     } 
    console.log(TODO) 
 
 });
 
 