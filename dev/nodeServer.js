const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer((request, response) => {
    console.log(request.url);
    return request
        .on('error', (err) => {
            console.error(err);
        })
        .on('data', (data) => {
            console.log(data);
        })
        .on('end', () => {
            response.on('error', (err) => {
                console.error(err);
            });

            if (request.url === '/') {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                fs.readFile(__dirname + '/index.html', (err, data) => {
                    if (err) {
                        return console.error(err);
                    }
                    response.end(data, 'utf-8');
                });

                return;
            }

            response.writeHead(200, { 'Content-Type': 'text/javascript' });
            fs.readFile(__dirname + request.url, (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
            return;
        });
}).listen(3000);