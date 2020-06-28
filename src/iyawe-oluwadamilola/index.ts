    import logger,{student} from './tools'; 
    import fetch, {Response} from 'node-fetch'
    let damisurl ='https://jsonplaceholder.typicode.com/todos'
fetch(damisurl)
.then(function(Response :any) {
        return  Response.json();
})
.then (function(myJson:any){
    let data:any =myJson
    let DAMI:any =damisurl

    for(let x=0; x<data.length;x++){
        data[x].title = 'This id todo with id number' + data[x].id
    }
 logger(data)
})