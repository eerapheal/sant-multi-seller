const express = require('express');
const app = express();


if(process.env.NODE_ENV !== 'PRODUCTION') {
    require('dontenv').config({
        path:'backend/config/.env'
    })
}

module.exports =app;
