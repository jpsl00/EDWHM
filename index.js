const chalk = require('chalk');
const express = require('express');
const request = require('request');
const bodyparser = require('body-parser');
const app = express();


app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/webhook', (req, res) => {
    var json = {
        "content": req.body.msg,
        "username": req.body.usr,
        "avatar_url": req.body.avt,
        "tts": req.body.tts,
    };
    request({
        method: 'POST',
        url: req.body.hook,
        json: json,
    });

    console.log(chalk.blue("[POST] ") + chalk.yellow("webhook url: "+req.body.hook+" data: " + JSON.stringify(Json)));
    res.redirect('/');
});

app.listen(80, () => {
    console.log(chalk.green.bold("Server started!"));
});
