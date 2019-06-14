var ip1;
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
   
   function get(){
    axios.get(`http://localhost:3002/users/`)
    .then((response)=>{
        console.log(response)
        var lat2;
        var long2;
        var size=response.data.length
        for(var i=0;i<size;i++)
        {   
            if(response.data[i].usertype=="Mechanic")
            {
                lat2=response.data[i].latitude;
                long2=response.data[i].longitude;
                console.log(lat2)
                console.log(long2)
                console.log(lat)
                console.log(long)
              var d = 2*Math.asin(Math.sqrt(Math.pow((Math.sin((lat-lat2)/2)),2) +Math.cos(lat)*Math.cos(lat2)*Math.pow((Math.sin((long-long2)/2)),2)));
                console.log(d)
                var dist=6371*d;
                console.log(dist)
                if(dist<=5){
                    document.getElementById('cardss').innerHTML+=`
                    <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Username: ${response.data[i].username}</li>
    <li class="list-group-item">Name: ${response.data[i].name}</li>
    <li class="list-group-item">Email: ${response.data[i].email}</li>
    <li class="list-group-item">Phone: ${response.data[i].num}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
                    `
                }


            }

        }
        
        
       
       
    })

    .catch((err) => {
       console.log(err)
    })
   }