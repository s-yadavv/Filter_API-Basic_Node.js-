export const sendJsonResponse = (res,code,payload) =>{
    res.statusCode = code;
    res.setHeader('Content-Type' , 'application/json');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET')
    res.end(JSON.stringify(payload))
}