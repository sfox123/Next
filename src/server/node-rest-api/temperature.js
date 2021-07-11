const AWS = require("aws-sdk")
AWS.config.update({
    // Note: Check for the region in the account
    region: "us-east-1"
})
const dynamodb = new AWS.DynamoDB.DocumentClient();

// specifying route paths
const dynamodbTableName = "temperature-inventory"
const temperatureApiPath = "/temperature"

exports.handler = async function(event){
    console.log("Request Event: ", event)
    let response;
    switch(true){
        case event.httpMethod === "GET" && event.path === temperatureApiPath:
            response = getAllRainfallProducts();
            break;
        // case event.httpMethod === "GET" && event.path === rainFallApiPath:
        //     response = getProduct(event.queryStringParameters.date)
        case event.httpMethod === "POST" && event.path === temperatureApiPath:
            response = await saveRainFallRecord(JSON.parse(event.body))
            break;
        default:
            response = buildResponse(404, "404 not found")
    }
    return response
}

// save a record which comes in POST request

/* SAMPLE JSON BODY
    
    {
        "id": "1", //id needs to be a string
        "day": 1,
        "month": 1,
        "predicted_temp": "30.03134412012881",
        "year": 2021
    }
*/
async function saveRainFallRecord(requestBody){
    const params = {
        TableName: dynamodbTableName,
        Item: requestBody
    }
    return await dynamodb.put(params).promise().then(() =>{
        const body = {
            Operation: "SAVE",
            Message: "SUCCESS",
            Item: requestBody      
        }
        return buildResponse(200, body)
    },(error) => {
        console.error("This is the custom error handler: ", error)
    })
}

// get all temperature records
async function getAllRainfallProducts(){
    const params = {
        TableName: dynamodbTableName
    }
    const allRecords = await dynamodb.scan(params, []).promise();
    const body = {
        data: allRecords
    }
    return buildResponse(200, body)
}

// formats the response
function buildResponse(statusCode, body){
    return {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(body)
    }
} 