const http = require('http');
const fs = require('fs');

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/') {

        fs.readFile('./html/index.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Erro interno no servidor');

            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    }else if (req.url === '/about') {

        fs.readFile('./html/about.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Erro interno no servidor');

            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        }); 
    
    }else if (req.url === '/contact-me') {

        fs.readFile('./html/contact-me.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Erro interno no servidor');

            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        }); 
    
    }
    else {

        fs.readFile('./html/404.html', (err, data) => {
            if (err) {

                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Erro interno no servidor')
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type','text/html');
                res.end(data);
            }
        })
    }



    



});

server.listen(port, () => {
    console.log(`Sevidor rodando em http://localhost:${port}`);
})