'use strict'
const AWS =require('aws-sdk')
exports.handler = async (event) => {
    const documentClient= new AWS.DynamoDB.DocumentClient();
    
    let responseBody="";
    let statusCode=0;
    
    let params={
        TableName:"Products",
      
    };
    
    try{
        
        const data =await documentClient.scan(params).promise();
        responseBody =JSON.stringify(data.I);
        statusCode=200;
        
    }catch(err){
        
        responseBody="unable  to get products "+err;
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
