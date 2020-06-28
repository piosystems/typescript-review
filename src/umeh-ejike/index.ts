import logger, {Todo}  from './tools'; 
import { promises } from 'fs';
const fetch = require('node-fetch');


fetch('https://jsonplaceholder.typicode.com/todos')
    
    .then((response: { json: () => any}) => response.json())

    .then(function(json:any){
        let data:any = json

        let TODO:any = Todo
       
        //create for loop than will loop through array
        for(let x=0; x < data.length; x++){
 
           data[x].title = 'This is todo with id number ' + data[x].id
        }
        
    
        logger(data)   
        
      
    })
    
    
  
    
    
    
    
    
    
    /*let myMap = new Map([
        ["ejike", "umeh"]
    ])

    for(let [key,value] of myMap.entries()){
        logger(`${key} -> ${value}`);
        let person1 = new Todo(1,6,'wewdwde', false)
logger(person1)    
    
  
    }*/