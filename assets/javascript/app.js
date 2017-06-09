
      
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=abf16ad95bff4566b296c186b87e1d86&?q="+ story +""
      

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
        	console.log(result);
          var results = response.data;
          }).fail(function(err) {
  throw err;
});



