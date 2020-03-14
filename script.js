var search;
var number = 0;
var queryURL;

queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ search + "&api-key="+"mhEs8PJwtIbnzwcaXFaT6AGMDE9QanMG" ;
$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response.data;
        for (var i = 0;i < number; i++) {
          var headline = "";
          $("#well-section").append(headline);
            
        }
      
    });
$("#run-search").on("click",function(event){
event.preventDefault();
search = $("#search-term").val();
number = $("#num-records-select").val();
console.log(search);
console.log(number);
})