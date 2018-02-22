function makeSearch() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
      document.getElementById("search").innerHTML =
      xhttp.responseText;
    }
  };
  // xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
  xhttp.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d479ad0f8014dde7cec0cebc52be0781', true);
  xhttp.send();
}