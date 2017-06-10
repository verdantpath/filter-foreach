$(function() {
  // DATA ABOUT PEOPLE GOES HERE
  var people = [
    {
      name: 'Casey',
      rate: 60
    },
    {
      name: 'Camille',
      rate: 80
    },
    {
      name: 'Gordon',
      rate: 75
    },
    {
      name: 'Nigel',
      rate: 120
    }
  ];

  // FILTERING CODE GOES HERE - CREATES A NEW ARRAY CALLED results
  var results = [];
  people.forEach(function(person) {
    if (person.rate >= 65 && person.rate <=130) {
      results.push(person);
    }
  });

  // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
  var $tableBody = $('<tbody></tbody>');
  for (var i = 0; i < results.length; i++) {
    var person = results[i];
    var $row = $('<tr></tr>');
    $row.append($('<td></td>').text(person.name));
    $row.append($('<td></td>').text(person.rate));
    $tableBody.append($row);
  }

  // Add the new content after the body of the page
  $('thead').after($tableBody);
});
