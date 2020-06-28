import {ClassTODO} from './tools'
let todo1 =  ClassTODO;
//create todo1 to be an instance of ClassTODO
const fetch = require('node-fetch');
fetch(`https://jsonplaceholder.typicode.com/todos`) //fetch 
.then(function(result:any) {
    return result.json();
})
.then(function(myJson:any){
    var data:any
    data = myJson
    let ClassTODO:any
    
    // json values to be assigned to the variable ClassTODO
    ClassTODO=Object.assign(data);
    todo1=ClassTODO;
    //Looping through the json file
    for(var i = 0; i< ClassTODO.length; i++){
      
        ClassTODO[i].title = `This is title with ID: ${ClassTODO[i].id}` //Different titles for the items in the return json file
        
        
    }
    
   console.log(ClassTODO) //to display the object on the screen.


});





    














