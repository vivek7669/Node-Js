const http = require("http");
const fs = require("fs");
const port = 3060;

const server = http.createServer();
server.on("request", (req, res) => {

    let rstream = fs.createReadStream("./apidata.json");

    //? simple Way
    // let datas = fs.readFileSync("apidata.json", "utf-8", (err, data)=>{
    //     res.end(data);
    // })
    // if(req.url == "/") {
    //     res.writeHead(200, {"Content-Type": "application/json"});
    //     res.write(`${datas}`);
    //     res.end();
    // }

    //? using stream method
    // let rstream = fs.createReadStream("./apidata.json");
    // if(req.url == "/"){
    //     res.writeHead(200, {"Content-Type": "application/json"});
    //     rstream.on("data",(chunkdata)=>{
    //         res.write(chunkdata);
    //         res.end();
    //     })
    //     rstream.on("end",()=>{
    //         res.end();
    //     })
    //     rstream.on("error",()=>{
    //         res.writeHead(404,"content-type : application/json");
    //         res.end("404 page Is not Found");
    //     })
    // }
    // else{
    //     res.writeHead(501,{"content-type":"application/json"});
    //     res.end("404 page Is not Found");
    // }

    //? using pipeline 😂
    // if(req.url == "/"){
    //     res.writeHead(200, {"Content-Type": "application/json"});
    //     rstream.pipe(res) //one line code
    // }
    // else{
    //     res.writeHead(501,{"content-type":"application/json"});
    //     res.end("404 page Is not Found");
    // }
    
});

server.listen(port, () => console.log(`server started on port ${port}`));
