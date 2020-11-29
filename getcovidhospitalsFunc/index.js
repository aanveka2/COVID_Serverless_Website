  
const AWS = require('aws-sdk');

var docClient = new AWS.DynamoDB.DocumentClient();


var tablename= "CovidHospitalDetails";

exports.handler =  (event, context , callback) => {
    
    console.log("This is hospital id:",event.HospitalId)
    var params = {
         ExpressionAttributeValues: {
            ":zip": event.ZipCode
        }, 
        TableName: tablename,
        KeyConditionExpression: "ZipCode = :zip",
        
    }
   
docClient.query(params,function(err, data){
    callback(err,data);
})

};