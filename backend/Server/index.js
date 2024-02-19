const http = require('http');
const fs = require('fs');
const url = require('url');  

const myserver = http.createServer((req, res) =>{
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} new Req Receieved \n`;
    const myUrl = url.parse(req.url, true);

    fs.appendFile('log.txt',log,(error, data) => {
       switch(myUrl.pathname){
        case "/":
           if(req.method === 'GET') return res.end("home page");
            break;
        case "/about":
            const username = myUrl.query.myname;
            res.end(`hello ${username}`)
            break;
        case "/signup":
            if(req.method === "GET") res.end("This is a signup form");
            else if(req.method === "POST"){
                //db Query
                res.end("Success")
            }
        default:
            res.end("404 Not Found")
       }
    } )

})

myserver.listen(8000, () => {console.log('Server Started')});