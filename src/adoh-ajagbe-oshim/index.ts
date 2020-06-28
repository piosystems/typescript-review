import {Todo} from './tools'; 

const fetch = require('node-fetch');

fetch(`https://jsonplaceholder.typicode.com/todos`)
 .then(function(response:any) {
        return response.json();
})
 .then(function(json:any){
     var url:any
     url= json
     json = Object.assign(url);

    for (var _i = 0; _i < 200; _i++) {
        var url1= url[_i]
        json[_i].title = `this is a title with ID ${json[_i].id}`      
}
    console.log(json)
 })