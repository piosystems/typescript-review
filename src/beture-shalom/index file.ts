import logger, {Todo} from './tool';
const fetch = require('node-fetch');

fetch(`https://jsonplaceholder.typicode.com/todos`)
.then(function(response:any) {
    return response.json();
})


.then(function(myJson:any){
    let data:any
    data = myJson
    let TODO = Object.assign(Todo,data);


    for(let x=0; x < TODO.length; x++){
        TODO[x].title = 'This is todo with id number ' + TODO[x].id
    }
    
    logger(data)

})
