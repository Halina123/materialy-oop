$(function () {
  $table = $('<table>');
  range = 100;
  for (x = 0; x < range; x++) {
    $row = $('<tr>');
    for (var y = 0; y < range; y++) {
      $row.append('<td>0</td>');
    }
    $table.append($row);
  }
  $('#s1').append($table);
  $('#s2').append($table);
  $('#s2').empty();
  $table = null;

  $('#s2').append($row.parent());
});
