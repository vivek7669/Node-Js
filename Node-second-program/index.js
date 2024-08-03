const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3060;


const replace = (data ,data1)=>{
   let data2 = data.replace("{{placeholder}}",data1);
   return data2;

}
const server = http.createServer();
server.on("request", (req, res) => {
    
    let homepage = fs.readFileSync("index.html", "utf8");
    let rstream = fs.createReadStream("./apidata.json");

    if(req.url == "/api"){
        res.writeHead(200, {"Content-Type": "text/html"});
        rstream.on("data",(chunkdata)=>{
            // res.write(chunkdata);
             let data = JSON.parse(chunkdata);
            let chdata = data.carts[0].products[0].title;
            let udata = replace(homepage,chdata)
            //  res.write(udata);
            res.end(udata);
        })
        rstream.on("end",()=>{
            res.end();
        })
        rstream.on("error",()=>{
            res.writeHead(404,"content-type : application/json");
            res.end("404 page Is not Found");
        })
    }
    else{
        res.writeHead(501,{"Content-Type": "text/html"});
        res.end("<h1 style='height:80vh; width:100vw; text-align:center;'>404 page Is not Found</h1>");
    }
    
});

server.listen(port, () => console.log(`server started on port ${port}`));
