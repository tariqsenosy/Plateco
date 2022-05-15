const http = require('http');
const {BasketController}=require('./controllers/BasketController')
const {getReqData}=require('./Application/utils/reqData')//get data from request

const PORT = process.env.PORT || 3000;

const server=http.createServer(async (req,res)=>{
if(req.url==='/setPlatesIntoBasket' && req.method==="POST")//Handle request
  {
     let data=await getReqData(req).then(async (body)=>{
         let fetchedObj=JSON.parse(body.replace(/\s+/g, ''))//remove white spaces if exists
         let total=await new BasketController().getTotal(fetchedObj.plates)//get basket total price
         .then((value)=>{//sucess
          res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({"Total":value}));
         })
         .catch((message)=>{//fail
          res.writeHead(505, { "Content-Type": "application/json" });
          res.end(JSON.stringify({message}));
         })  
     })
      
  }

res.end();
})

server.listen(PORT)