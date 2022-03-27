// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use('bodyParser');
// Cors for cross origin allowance
const cors = require ('cors');
app.use('cors');

// Initialize the main project folder
app.use(express.static('website'));
// Spin up the server
const port = 8000;
const server = app.listen(port , listening);

// Callback to debug
function listening ()
{
    console.log(`running on port ${port}`);
}
// Initialize all route with a callback function

// Callback function to complete GET '/all'
app.get('/all',function(req,res){
    res.send(projectData);
});
// Post Route
app.post('/',function(req,res){
    projectData.push(req.body);
})