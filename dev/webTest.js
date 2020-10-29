const http = require('http');
const fs = require('fs');
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
            response.statusCode = 200;
            if (request.url === '/test.js') {
                response.writeHead(200, { 'Content-Type': 'text/javascript' }); 
                fs.readFile(__dirname + '/test.js', (err, data) => {
                    // 파일 읽는 메소드
                    if (err) {
                        return console.error(err); // 에러 발생시 에러 기록하고 종료
                    }
                    response.end(data, 'utf-8'); // 브라우저로 전송
                });
                return;
            }
            response.writeHead(200, { 'Content-Type': 'text/html' }); // header 설정
            fs.readFile(__dirname + '/index.html', (err, data) => {
                // 파일 읽는 메소드
                if (err) {
                    return console.error(err); // 에러 발생시 에러 기록하고 종료
                }
                response.end(data, 'utf-8'); // 브라우저로 전송
            });
        });
}).listen(3000);