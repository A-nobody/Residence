const qs = require("querystring");

export const pathParams = (url)=>{
    return qs.parse(url);
}