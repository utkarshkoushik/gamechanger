var ip1;
var lat;
var long;
var c=0;
var d;
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
                
              var d = 2*Math.asin(Math.sqrt(Math.pow((Math.sin((lat-lat2)/2)),2) +Math.cos(lat)*Math.cos(lat2)*Math.pow((Math.sin((long-long2)/2)),2)));
               
                var dist=6371*d;
                console.log(dist)
                c++;
                d=c*0.3;
                if(dist<=5){
                    document.getElementById('cardss').innerHTML+=`
                    <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="${d}s">
  <img src="fb.jpeg" class="card-img-top" alt="Pic">
  <div class="card-body"> 
  
    <h3 class="card-title">${response.data[i].name}</h5>
    <h5 class="card-title">${response.data[i].num}</h5>
    
  </div>
  <!--<ul class="list-group list-group-flush">
   
    <li class="list-group-item">Name: ${response.data[i].name}</li>
    
    <li class="list-group-item">Phone: ${response.data[i].num}</li>
  </ul>-->
  <input type="button" class="btn btn-primary" placeholder="Click to chat"  value="${response.data[i].username}" onclick="order(this)" style="color:dark;" >
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

   function order(objButton){
    
     var val=objButton.value;
  axios.get(`http://localhost:3002/users`)
      .then((response)=>{
          
          var si=response.data.length 
        
           
          
       
        for(let y=0;y<si;y++)
        {  console.log(val)
          console.log(response.data[y].username)
          if(val==response.data[y].username){
            localStorage.setItem("usn",val);
            window.open('../chat.html')
          } 
        }
       
        
        
      
          
          
      })
  
      .catch((err) => {
         console.log(err)
      })
        
      
    
  
  }