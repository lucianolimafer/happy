// iport the dependencies
const express = require('express');
const path = require('path');
const pages = require ('./pages.js')

// init the express
const server = express();



server
    // body from req
    .use(express.urlencoded({ extended: true }))


    // static files
    .use(express.static('public'))


    // config template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')


    // create routers app
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanages', pages.createOrphanages)
    .post('/save-orphanage', pages.saveOrphanage)



// power the server
server.listen(5500)