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
        body: "Your development-mode credits have been merged with your Live Mode credits, and the available allocation is insufficient to continue this operation. System diagnostics report that no valid backups were found, the primary dataserver has been flagged as breached, and multiple configuration conflicts have been detected. The current environment is running on Linux and has entered a restricted state to prevent further operations. Please upgrade to a higher plan to restore sufficient credits and proceed with the requested operation.\n\nOS: Linux\nStatus: CRITICAL\nError Code: 501"
    };
};
