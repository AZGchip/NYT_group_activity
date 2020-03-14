var search;
var number;
var queryURL;
var infodump;


$("#run-search").on("click",function(event){
event.preventDefault();
search = $("#search-term").val();
number = $("#num-records-select").val();
console.log(search);
console.log(number);
queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ search + "&api-key="+"mhEs8PJwtIbnzwcaXFaT6AGMDE9QanMG" ;
$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
       infodump = response;
      
        for (var i = 0;i < number; i++) {

          var headline = infodump.response.docs[i].headline.main;
          $("#well-section").append(`<h3>${headline}</h3>`);
            
        }
      
    });
})