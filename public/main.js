/*(function(){

	var httpRequest;

	function makeSearch(){
		httpRequest = new XMLHttpRequest();

		if(!httpRequest){
			alert('Cannot create an XMLHTTP instance. Sigue rascando');
			return false;
		}
		httpRequest.onreadystatechange = alertContents;
		httpRequest.open('GET', 'test.html');
		httpRequest.send();

		function alertContents(){

			if (httpRequest.readyState === XMLHttpRequest.DONE){

				if (httpRequest.status === 200){
					alert(httpRequest.responseText)
				}else{
					alert('There was a problem with this request');
				}
			}
		}//end alertContens
	}//end makeSearch

	document.getElementById("but-search").addEventListener('click', makeSearch);
})();*/

function makeSearch() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("search").innerHTML =
      this.responseText;
    }
  };
  xhttp.open('GET', 'test.html');
  xhttp.send();
}
