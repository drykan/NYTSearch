//search button
$("#submit").on("click", function(){
    var searchTerm = $("#search").val().trim();
    var numRecords = $("#numberRecords").val().trim();
    var yearStart = $("#startYear").val().trim();
    var yearEnd = $("#endYear").val().trim();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=abf16ad95bff4566b296c186b87e1d86&?q="+ searchTerm+"&?begin_date="+yearStart+"&?end_date="+yearEnd;
      

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
        	console.log(result);
          var results = response.data;
          })//.fail(function(err) {
            //  throw err;
            //});

    for(var i = 0; i < numRecords; i++){
        
    }
});



