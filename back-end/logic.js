var api = '58b7b729a8f74a0b86326c33a5c81568';

var userVal = $("#usersearch").val();


var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + api + "q" + userVal;

// AJAX Function
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
  	console.log(response);
  }