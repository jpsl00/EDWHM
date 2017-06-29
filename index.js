const chalk = require('chalk');
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/webhook', (req, res) => {
    request({
        method: 'POST',
        url: req.body.hook,
        json: {
            'content':req.body.content,
            'username':req.body.username,
            'avatar_url':req.body.avatar_url,
            'tts':req.body.tts
        },
    });
    console.log(chalk.blue("[POST] ") + chalk.yellow(JSON.stringify(req.body)));
    res.sendStatus(200).end();
});

app.listen(80, () => {
    console.log(chalk.green.bold("Server started!"));
});
