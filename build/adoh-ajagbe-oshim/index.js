"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require('node-fetch');
fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(function (response) {
    return response.json();
})
    .then(function (json) {
    var url;
    url = json;
    json = Object.assign(url);
    for (var _i = 0; _i < 200; _i++) {
        var url1 = url[_i];
        json[_i].title = `this is a title with ID ${json[_i].id}`;
    }
    console.log(json);
});
//# sourceMappingURL=index.js.map