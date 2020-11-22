const AWS = require('aws-sdk');

var docClient = new AWS.DynamoDB.DocumentClient();


var tablename= "CovidHopitals";

exports.handler =  (event, context , callback) => {
    
    console.log("Inserting data:",event.HospitalId);
   
   
docClient.put({TableName: tablename, Item: {"HospitalId": event.HospitalId, "Location": event.Location, "Rating": event.Rating,  "Hospital_Name": event.Hospital_Name, "Testing_Center": event.Testing_Center}},function(err, data){
    callback(err,data);
})
    
};






