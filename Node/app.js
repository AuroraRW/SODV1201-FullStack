
// different between import and require
const http = require('http')
const server = http.createServer((req, res)=>{
    // console.log('Hello World ')
    let url = req.url
    let method = req.method
    // console.log(url)
    // console.log(method)
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Home</title><head>');
        res.write('<body><h1>This is home page!</h1></body>');
        res.write('</html>');
        return res.end()
    }
    if(url==='/login'){
        res.write('<html>');
        res.write('<head><title>Login</title><head>');
        res.write('<body><h1>This is login page!</h1></body>');
        res.write('</html>');
        return res.end()
    }
    res.write('<html>');
    res.write('<head><title>Error</title><head>');
    res.write('<body><h1>This is error page!</h1></body>');
    res.write('</html>');
    res.end();
})
server.listen(7000, ()=>{
    console.log('server is runing........')
})