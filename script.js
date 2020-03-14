var search;
var number;
var queryURL;

queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key="+"mhEs8PJwtIbnzwcaXFaT6AGMDE9QanMG" 
$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response.data;

      
    });