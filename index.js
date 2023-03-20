import express from "express";

const app = express();

const port = 8000;


app.listen(port, function (error) {
    if (error) {
        console.log('failed to run')
    } else {
        console.log('server run successfully')

    }
})