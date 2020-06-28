"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
let todo1 = tools_1.ClassTODO;
//create todo1 to be an instance of ClassTODO
const fetch = require('node-fetch');
fetch(`https://jsonplaceholder.typicode.com/todos`) //fetch 
    .then(function (result) {
    return result.json();
})
    .then(function (myJson) {
    var data;
    data = myJson;
    let ClassTODO;
    // json values to be assigned to the variable ClassTODO
    ClassTODO = Object.assign(data);
    todo1 = ClassTODO;
    //Looping through the json file
    for (var i = 0; i < ClassTODO.length; i++) {
        ClassTODO[i].title = `This is title with ID: ${ClassTODO[i].id}`; //Different titles for the items in the return json file
    }
    console.log(ClassTODO); //to display the object on the screen.
});
//# sourceMappingURL=index.js.map