
var lat;
var long;
function fun(){
console.log('yes')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showMap,showError);
    } else{
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }

    function showMap(position){
        // Get location data
        lat = position.coords.latitude;
    long = position.coords.longitude;
        console.log(lat);
    }
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
    var rate_value;

    if (document.getElementById('option1').checked) {
        rate_value = document.getElementById('option1').value;
      }
      else{
        rate_value = document.getElementById('option2').value;
      }
      console.log(rate_value);
    
     var  password= document.getElementById('pass').value;
      var cpassword =  document.getElementById('cpass').value;

    if(password==cpassword){
    
    axios.post('http://localhost:3002/users',{
        username:document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value,
        cpassword: document.getElementById('cpass').value,
        
        name:document.getElementById('name').value,
        usertype: rate_value,
        num: document.getElementById('num').value,
        latitude:lat,
        longitude:long
       
    })
    .then((response)=>{

        console.log("stop");
    })
    .catch((error)=>{

        console.log(error);
    })
  }
  else{
      alert("Password does not match");
  }
}

function funt(){
    

    var pass=document.getElementById('pass1').value;
    var usern=document.getElementById('usern').value;
    axios.get(`http://localhost:3002/users/${usern}`)
    .then((response)=>{
        console.log("stop")
        
        
        
        if(response.data[0].password==pass && response.data[0].username==usern)
        {
            localStorage.setItem("un",response.data[0].username);
            if(response.data[0].usertype=="User")
            {window.open('/home/utkarsh/Desktop/car/2083_steak_house/use1.html');}
            else {window.open('/home/utkarsh/Desktop/car/2083_steak_house/mechanic.html')}
            
        }
        else {alert("Invalid username or password")}
       
    })
    .catch((err) => {
       console.log(err)
    })}