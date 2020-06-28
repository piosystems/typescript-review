//let firstName: string;

//firstName = "Arnika";
///firstName = 27;

/*import logger, {Person} from './tools';


//Accessing object properties
let firstName = "Nicole";
let lastName = "Arnika";
let gender = "female";
let height = 1.7;
let hobbies = ['reading','singing'];
let birthday = new Date(1900,4,5);
let isAlive = true;

const person1 = new Person(firstName, lastName, gender, height, 
    hobbies, birthday, isAlive)

logger(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()}`); 
*/


                   ////////     CONTINOUS ASSESSMENT     /////////

import logger, {TODO} from './tools';

import fetch, {Response} from 'node-fetch'

let my_todo = 'https://jsonplaceholder.typicode.com/todos/';

fetch(my_todo)

.then(function(response:any){
    return response.json(); //// return response as a JSON file format
})
.then(function(nic_Json:any){
    var data:any
    data = nic_Json
    let TODO:any

    //// to assign the json values to TODO
    TODO = Object.assign(data);
    my_todo = TODO

    //////to create the for loop for the Json file
    for(var x = 0; x< TODO.length; x++){

        TODO[x].title = `This is title with ID: ${TODO[x].id}`//// this is to keep changing the title for each item returned

    
    }

    console.log(TODO) //// to print the object to the screen

});