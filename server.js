import http from 'node:http'
import {getData} from './database/db.js';
import { sendJsonResponse } from './utils/sendJSONResponse.js';
import { filterDatabyPath} from './utils/filterData.js';
import {getDataByQueryParam } from './utils/getDataByQueryParam.js';
const PORT = 8000;
// const server = http.createServer((req , res) => {
//     res.end('Hello from the server');
// })

// server.listen(PORT, console.log(`listening.... from ${PORT}`));

const server = http.createServer(async (req, res) => {
    //res.write("Message from server!\n")
    //console.log(req.url)
    const destinations = await getData();

    const urlObj = new URL(req.url,`http://${req.headers.host}`); 

    const queryobj = Object.fromEntries(urlObj.searchParams);  //convert to js obect 

    if(urlObj.pathname == '/api' && req.method === 'GET'){

        let filterData = getDataByQueryParam(destinations,queryobj);


        sendJsonResponse(res,200,filterData);

    }else if(req.url.startsWith('/api/continent') && req.method === 'GET' ){
        const continent = req.url.split('/').pop();
        const filteredData = filterDatabyPath(destinations,'continent',continent);
        sendJsonResponse(res,200,filteredData);
        //console.log(isActiveParam);
    }else if(req.url.startsWith('/api/country') && req.method === 'GET' ){
        
        const country = req.url.split('/').pop();
        const filteredData = filterDatabyPath(destinations,'country',country);
        sendJsonResponse(res,200,filteredData);
    }else{

        sendJsonResponse(res,404,{
            error : "Not found",
            Message : "The request route doesnot exist"
        })
    }
    //res.end("this is from the serever!");
})

server.listen(PORT ,() =>console.log("Connected !") )