const express = require('express');
const app = express();

app.get('/hello', (request, response) =>{
    response.send('Hello React.');
});

app.listen(3334);