//Global Variables
let ProjectData = {};
let d = new Date();
let date = d.getDay +'/'+ d.getMonth +'/'+ d.getFullYear;
let zip = document.getElementById("zip").value;
let feeling = document.getElementById("feelings").value;
// Personal API Key for OpenWeatherMap API
const key = "e0a8abd2df5bf126d86d5faca5600e27";
const url = `http://api.openweathermap.org/data/2.5/forecast?id=${zip}&appid=${key}`;

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener('click', generate);

/* Function called by event listener */
function generate()
{
    console.log("button was clicked");
    getData(url)
     postData('/all',ProjectData)
     getData('/', ProjectData);

    
}
/* Function to GET Web API Data*/
const getTemp = async (url)=>{
    const res = await fetch(url)
    try 
    {
        let temp = await res.json();
        console.log(temp);
    }
    catch(error)
    {
        console.log ("error: "+error);
    }
}
/* Function to POST data */
const postData = async(url= '', data = {})=>{
    const res = await fetch (url , {
        method : 'POST',
        credentials : 'same-origin',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    });
    try
    {
        let data = await res.json();
        console.log(data);

    }
    catch (error)
    {
        console.log(error);
    }

}

/* Function to GET Project Data */
const getData = async(url= '', data = {})=>{
    const res = await fetch (url , {
        method : 'GET',
        credentials : 'same-origin',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    });

}