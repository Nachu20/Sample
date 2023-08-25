const http =require("node:http");
const fs=require("node:fs");

const server= http.createServer((req,res)=>{
    const name="Nachu";
   // res.writeHead(200, {"Content-Type":"text/html"});
    // let html= fs.readFileSync("./Demo.html","utf-8");
    // html= html.replace("{{name}}", name);
    // res.end(html);
    //console.log(req);
   if(req.url==="/")
        res.end("Home Page");
   else if(req.url==="/about")
        res.end("About Page");
    else
        res.writeHead(404);
});

server.listen(3001,()=>{
    console.log("Server is running");
});