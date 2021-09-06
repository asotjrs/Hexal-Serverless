'use strict'
const AWS =require('aws-sdk')
exports.handler = async (event) => {
    const documentClient= new AWS.DynamoDB.DocumentClient();
    
    let responseBody="";
    let statusCode=0;
    
    let params={
        TableName:"Products",
        Item:{
            id:"22222",
            productName:"solar panel "
        }
    };
    
    try{
        
        const data =await documentClient.put(params).promise();
        responseBody =JSON.stringify(data);
        statusCode=201;
        
    }catch(err){
        
        responseBody="unable  to put product"+err;
        statusCode=403;
        
    }
    
    const response ={
        statusCode:statusCode,
        headers:{
            "Content-Type": "application/json"
        },
        body: responseBody
    };
    
    return response;
    

};
