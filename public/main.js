var APIKey;

function getAPICredentials(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if( xhttp.readyState == 4 ){
        if( xhttp.responseText.length != 0 ){ 
          APIKey = xhttp.responseText;
        } else {
          console.log("Please, add your own key");
        }
      }
    };
    
    xhttp.open('GET', "http://localhost:9000/.key", true);
    xhttp.send();
}

getAPICredentials();


function makeSearch() {

  var search = document.getElementById('search-weather').value;
  var check = document.getElementById('search-weather');

  if (!check.checkValidity()){

    var error = document.getElementById("error-form").innerHTML = check.validationMessage;
    document.getElementById('search-weather').style.border = '2px solid red';
  
  }else{
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4) {
        document.getElementById("search").innerHTML =
        xhttp.responseText;
      }
    };

    xhttp.open('GET', "http://api.openweathermap.org/data/2.5/weather?q=" + search + "&mode=html&APPID=" + APIKey, true);
    xhttp.send();

  }
}


//Geoposition to get coordinates from browser
var geoBlock = document.getElementById("geoInfo");

function geoCurrent() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else { 
        geoBlock.innerHTML = "Geolocation is not supported by this browser. Update now!!";
    }

}

function showPosition(position) {
	
	var latCoord = (position.coords.latitude);
  var longCoord = (position.coords.longitude);

  //Call to API sending coords
  var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
      document.getElementById("search").innerHTML =
      xhttp.responseText;
    }
  };

  xhttp.open('GET', "http://api.openweathermap.org/data/2.5/weather?lat=" + latCoord + "&lon=" + longCoord + "&mode=html&APPID=" + APIKey, true);
  xhttp.send();


  // var lat = document.createElement("p");
  // var long = document.createElement("p");

  // lat.innerText = "Latitude: " + latCoord;
  // long.innerText = "Longitude: " + longCoord;

  // document.getElementById("geoInfo").innerHTML = lat.innerText + '<br/>' + long.innerText;


}