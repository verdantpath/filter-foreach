$(function() {
  // DATA ABOUT PEOPLE GOES HERE

  // FILTERING CODE GORS HERE - CREATES A NEW ARRAY CALLED results

  // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
  var $tableBody = $('<tbody></tbody>');
  for (var i = 0; i < results.length; i++) {
    var person = results[i];
    var $row = $('<tr</tr>');
    $row.append($('<td></td>').text(person.name));
    $row.append($('<td></td>').text(person.rate));
    $tableBody.append($row);
  }

  // Add the new content after the body of the page
  $('thead').after($tableBody);
});
