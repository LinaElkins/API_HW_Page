// //  creating an empty array for fav Topics that will be added to
//  var favTopic = [];
 
// Add newFav to favTopic array

//create buttons for newFav




//  // Event listener for all button elements
//  $("button").on("click", function() {
//     // In this case, the "this" keyword refers to the button that was clicked
//     var animal = $(this).attr("data-animal");

//     // Constructing a URL to search Giphy for the name of the animal in topics
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       animal + "&api_key=0W74wPAFg35nNm9VMTJbdCSFrMArj6jC&limit=10";

//     // Performing our AJAX GET request
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       // After the data comes back from the API
//       .then(function(response) {
//         // Storing an array of results in the results variable
//         var results = response.data;

//         // Looping over every result item
//         for (var i = 0; i < results.length; i++) {

//           // Only taking action if the photo has an appropriate rating
//           if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
//             // Creating a div with the class "item"
//             var gifDiv = $("<div class='item'>");

//             // Storing the result item's rating
//             var rating = results[i].rating;

//             // Creating a paragraph tag with the result item's rating
//             var p = $("<p>").text("Rating: " + rating);

//             // Creating an image tag
//             var animalImage = $("<img>");

//             // Giving the image tag an src attribute of a proprty pulled off the
//             // result item
//             animalImage.attr("src", results[i].images.fixed_height.url);

//             // Appending the paragraph and animalImage we created to the "gifDiv" div we created
//             gifDiv.append(p);
//             gifDiv.append(animalImage);

//             // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//             $("#gifs-appear-here").prepend(gifDiv);
//           }
//         }
//       });
//   });


