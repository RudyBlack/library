const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.route('/src/*').all(function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend', req.url));
});

app.route('/testCode/*').all(function(req, res){
    res.sendFile(path.join(__dirname, '../../', req.url));
})

app.listen(port, () => console.log(`Express app is running on port: ${port}`));

module.exports = app;