import {TODO} from './tools'
//here we import the class from the './tools' file

const fetch = require('node-fetch');
fetch(`https://jsonplaceholder.typicode.com/todos`) 
//here we fetch the data in the url specified above

.then(function(response:any) {
    return response.json();
})
//here we change the format or type of the file gotten from the url to a JSON fromat

.then(function(dataname:any){
    var data:any
    data = dataname
    let TODO:any
//here we assign 'dataname' values to the variable TODO

    TODO=Object.assign(data);
    //here we create a loop function enabling us to print each of the 200 objects through the json file
    for(var i = 0; i< TODO.length; i++){
        TODO[i].title = `This is todo with id number: ${TODO[i].id}` 
        //here we change the title for each item in the json file that has been returned to us
    }
    
   console.log(TODO) 
   //this code here allows us to print the object to screen.


});





    












/*import {apiService} from './apiservice'

let me = new apiService();
me.getTodo(1,1,"delectus aut autem",false);*/

