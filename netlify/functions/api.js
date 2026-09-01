exports.handler = async function(event, context) {
    // Wait for 1 second (1000 milliseconds)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return the 500 Internal Server Error
    return {
        statusCode: 501,
        headers: {
            "Content-Type": "text/plain",
            // Include CORS headers just in case you are calling this from a frontend
            "Access-Control-Allow-Origin": "*", 
        },
        body: "Server returned Error, the API seems down"
    };
};
