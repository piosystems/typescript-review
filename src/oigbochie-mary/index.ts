import {TODO} from "./tools"

//create instance of a class 


const fetch = require("node-fetch") //Declare variable and assign node-fetch function to it.
fetch(`https://jsonplaceholder.typicode.com/todos`) // fetching the data in this URL 
.then(function(response:any) {
    return response.json();
})
.then(function(myJson:any){     //response will be passed into this parameter
    var data:any
    data = myJson
    
    // assigns json values to the variable TODO
    let TODO = Object.assign(data);  //it is linked to the class
    // create a for loop. looping through the json file. 
    for(var i = 0; i< TODO.length; i++){
     
        //change title for each item in the returned json file
        TODO[i].title = `This is title with iD ${TODO[i].id}`  
    
        
    }
    
   console.log(TODO) 


});
