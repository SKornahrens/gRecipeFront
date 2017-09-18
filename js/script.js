// EDITABLE TABLE JS, FOR LATER
// var $TABLE = $('#table');
// var $BTN = $('#export-btn');
// var $EXPORT = $('#export');
//
// $('.table-add').click(function () {
//   var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
//   $TABLE.find('table').append($clone);
// });
//
// $('.table-remove').click(function () {
//   $(this).parents('tr').detach();
// });
//
// $('.table-up').click(function () {
//   var $row = $(this).parents('tr');
//   if ($row.index() === 1) return; // Don't go above the header
//   $row.prev().before($row.get(0));
// });
//
// $('.table-down').click(function () {
//   var $row = $(this).parents('tr');
//   $row.next().after($row.get(0));
// });
//
// // A few jQuery helpers for exporting only
// jQuery.fn.pop = [].pop;
// jQuery.fn.shift = [].shift;
//
// $BTN.click(function () {
//   var $rows = $TABLE.find('tr:not(:hidden)');
//   var headers = [];
//   var data = [];
//
//   // Get the headers (add special header logic here)
//   $($rows.shift()).find('th:not(:empty)').each(function () {
//     headers.push($(this).text().toLowerCase());
//   });
//
//   // Turn all existing rows into a loopable array
//   $rows.each(function () {
//     var $td = $(this).find('td');
//     var h = {};
//
//     // Use the headers from earlier to name our hash keys
//     headers.forEach(function (header, i) {
//       h[header] = $td.eq(i).text();
//     });
//
//     data.push(h);
//   });
//
//   // Output the result
//   $EXPORT.text(JSON.stringify(data));
// });
var RecipeData = {};

$(document).ready(function () {
  $("#SubmitRecipe").click(function (event) {
    event.preventDefault();
    var UserFirst = "user_fname"
    var UserLast = "user_lname"
    var RecipeName = "name"
    var RecipeDesc = "description"
    var UserID = "user_id"
    // RecipeData[UserFirst] = $("#user_fname").val()
    // RecipeData[UserLast] = $("#user_lname").val()
    RecipeData[UserID] = 1
    RecipeData[RecipeName] = $("#recipe_name").val()
    RecipeData[RecipeDesc] = $("#recipe_description").val()
    SubmitToDB(RecipeData)
  })

function SubmitToDB(RecipeDataSubmitted) {
  var StringyData = JSON.stringify(RecipeDataSubmitted);
  console.log(StringyData);

  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://grecipeapi.herokuapp.com/api/recipes",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache",
  },
  "processData": false,
  "data": StringyData
  }

  $.ajax(settings).done(function (response) {
  console.log(response);
  console.log(response.recipe_id);
  });


}

});
