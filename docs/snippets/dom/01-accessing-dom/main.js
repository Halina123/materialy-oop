// Cache DOM search results for future use
var $clock = $('#clock');
var $board = $('#board');
var $p1Score = $('#p1Score');
var $p2Score = $('#p2Score');

// Create initial game state
var state = {
  playerName: 'Janusz',
  time: 20,
  score: {
    player: 0,
    cpu: 0
  }
};

$('#startGameButton').click(function () {
  startGame(state);
});

// Display initial data from state on screen
displayClock($clock, state);
displayPlayerScore($p1Score, state);
displayCpuScore($p2Score, state);



// Add interaction to given table
function makeInteractive(table) {
  return $(table).on('click', 'td', function (event, isCPU) {

    if (isCPU === true) {
      state.score.cpu += $(this).hasClass('black') ? -1 : 1;
    } else {
      state.score.player += $(this).hasClass('black') ? 1 : -1;
    }

    displayPlayerScore($p1Score, state);
    displayCpuScore($p2Score, state);

    $(this).toggleClass('black');
  });
}


// Create new table
function createTable(width, height) {
  var $table = $('<table>');
  var $row, $cell;

  for (var x = 0; x < height; x++) {
    $row = $('<tr>');
    for (var y = 0; y < width; y++) {
      $cell = $('<td>');
      $row.append($cell);
    }
    $table.append($row);
  }

  return $table;
}

$board.append(
  convertToCheckboard(
    createTable(4, 4)
  )
);
