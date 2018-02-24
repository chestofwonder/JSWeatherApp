function makeSearch() {

  var search = document.getElementById('search-weather').value;

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
      document.getElementById("search").innerHTML =
      xhttp.responseText;
    }
  };
  //xhttp.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d479ad0f8014dde7cec0cebc52be0781', true);
  xhttp.open('GET', "http://api.openweathermap.org/data/2.5/weather?q=" + search + "&mode=html&APPID=d479ad0f8014dde7cec0cebc52be0781", true);
  xhttp.send();
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

  xhttp.open('GET', "http://api.openweathermap.org/data/2.5/weather?lat=" + latCoord + "&lon=" + longCoord + "&mode=html&APPID=d479ad0f8014dde7cec0cebc52be0781", true);
  xhttp.send();


  // var lat = document.createElement("p");
  // var long = document.createElement("p");

  // lat.innerText = "Latitude: " + latCoord;
  // long.innerText = "Longitude: " + longCoord;

  // document.getElementById("geoInfo").innerHTML = lat.innerText + '<br/>' + long.innerText;


}