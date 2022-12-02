const express = require('express');
const app = express();
const port = 5000
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//definiendo las rutas
app.use(require('./routes/index'));

app.listen(port)
console.log('server on port 5000')
