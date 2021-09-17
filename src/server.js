const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('./dist/app-demo'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/app-demo/'}),
);


app.listen(process.env.PORT || 8080);
