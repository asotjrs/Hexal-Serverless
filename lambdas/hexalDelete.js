'use strict'
const AWS =require('aws-sdk')
exports.handler = async (event) => {
    const documentClient= new AWS.DynamoDB.DocumentClient();
    
    let responseBody="";
    let statusCode=0;
    
    let params={
        TableName:"Products",
        Key:{
            id :"22222",
        }
    };
    
    try{
        
        const data =await documentClient.delete(params).promise();
        responseBody =JSON.stringify(data);
        statusCode=204;
        
    }catch(err){
        
        responseBody="unable  to delete  product"+err;
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
