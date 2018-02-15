function makeSearch() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
      document.getElementById("search").innerHTML =
      xhttp.responseText;
    }
  };
  xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
  xhttp.send();
}