var use = localStorage.getItem("un");
var lat;
var long;
function f(){
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showMap, showError);
    } else{
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}
 
// Define callback function for successful attempt
function showMap(position){
    // Get location data
     lat = position.coords.latitude;
     long = position.coords.longitude;
     console.log(lat)



    var latlong = new google.maps.LatLng(lat, long);
    
    var myOptions = {
        center: latlong,
        zoom: 16,
        mapTypeControl: true,
        navigationControlOptions: {style:google.maps.NavigationControlStyle.SMALL}
    }
    
    var map = new google.maps.Map(document.getElementById("embedMap"), myOptions);
    var marker = new google.maps.Marker({position:latlong, map:map, title:"You are here!"});
}
 
// Define callback function for failed attempt
function showError(error){
    if(error.code == 1){
        result.innerHTML = "You've decided not to share your position, but it's OK. We won't ask you again.";
    } else if(error.code == 2){
        result.innerHTML = "The network is down or the positioning service can't be reached.";
    } else if(error.code == 3){
        result.innerHTML = "The attempt timed out before it could get the location data.";
    } else{
        result.innerHTML = "Geolocation failed due to unknown error.";
    }
}

function a(){
    console.log("yes")
    axios.get(`http://localhost:3002/orders`)
    .then((response)=>{
     var size = response.data.length
        console.log(size)
     for(let i=0;i<size;i++){
         console.log(use)
         if(response.data[i].username1==use)
         {
             document.getElementById('cardss').innerHTML+=`
             <div class="col-md-4 col-sm-4">
             <span>Customer : <input type="button" class="btn btn-primary"  value="${response.data[i].username}" onclick="order(this)" style="color:dark;" ></span>
            </div>
             `
         }
     }

        
        
    })

    .catch((err) => {
       console.log(err)
    })
}

function order(objButton){
    
    var val1=objButton.value;

    localStorage.setItem("usn",val1);
    
    
        window.open('../chat.html')
        
   
       
     
   
 
 }