const AWS = require('aws-sdk');

var docClient = new AWS.DynamoDB.DocumentClient();


var tablename= "CovidHopitals";

exports.handler =  (event, context , callback) => {
    
    console.log("This is hospital id:",event.HospitalId)
    var params = {
        TableName: tablename,
        Key: {
            "HospitalId" : event.HospitalId
        }
    }
   
docClient.get(params,function(err, data){
    callback(err,data);
})
    // TODO implement
    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify('{"Hospital Name " : "UHS Walk In", "Location" : "4417 Vestal Pkwy E, Vestal, NY 13850","Rating" : "3","Test Center" : "Yes", "Default case"}'),
    // };
    // return response;
};




