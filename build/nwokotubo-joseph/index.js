"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
const fetch = require('node-fetch'); //Store the node fetch function in a variable in order to use it.
fetch(`https://jsonplaceholder.typicode.com/todos`) //fetch from URL
    .then(function (response) {
    return response.json(); //return the response in json format
})
    .then(function (myJson) {
    var data;
    data = myJson; //Store the response inside variable called data
    let todoInstance; //Specify type for instance of class that will be created.
    //Assign json values to the variable TODO
    todoInstance = new tools_1.TODO(data); //Create new instance of TODO class
    //Loop through the json file
    for (var i = 0; i < 200; i++) {
        todoInstance[i]["title"] = `This is title with ID: ${todoInstance[i]["id"]}`; //Changing the title for each item in the returned json file
    }
    console.log(todoInstance); //print the class object to screen.
});
//# sourceMappingURL=index.js.map