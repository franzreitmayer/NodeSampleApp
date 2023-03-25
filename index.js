const { response } = require('express');
const express = require('express');
const router = express.Router;
const movieRouter = require('./movie');
const morgan = require('morgan');
const { logger } =require('./util');

const app = express();



app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {res.redirect('/movie')});

app.use(logger);
app.use(morgan('combined', {immediate: true}));
app.use('/movie', movieRouter);

app.listen(8080, () => {
    console.log("Service is listening on port 8080");
});