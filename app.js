const http = require('http');
function rqListener(req, res)
{
// console.log(req.url,req.method,req.header);
// process.exit();
const url=req.url;
//message
if(url==='/')
{
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Submit</button></form></body>');
    res.write('</html>');
    return res.end();
}
//Home
else if(url==='/home')
{
    res.write('<html>');
    res.write('<head><h1>My Home</h1></head>');
    res.write('<body><form action="/home" name="home">Welcome to Home<button>Submit</button></form></body>');
    res.write('</html>');
    return res.end;
}
//About
else if(url==='/about')
{
    res.write('<html>');
    res.write('<head><h1>About us</h1></head>');
    res.write('<body><form action="/about" name="about">Welcome to About us Page<button>Submit</button></form></body>');
    res.write('</html>');
    return res.end();
}
//Node
else if(url==='/node')
{
    res.write('<html>');
    res.write('<head><h1>Node.js</h1></head>');
    res.write('<body><form action="/node" name="node">Welcome to my node js project<button>Submit</button></form></body>');
    res.write('</html>');
    return res.end();
}
//Event happened - Content
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Welcome to my Node Js project</h1></body>');
res.write('</html>');
res.end();
}
const server = http.createServer(rqListener);
server.listen(3000);
//other ways :
//Anonymous function
// http.createServer(function(req, res) {
// })
//Arrow functions
// http.createServer( (req, res) => {
// })