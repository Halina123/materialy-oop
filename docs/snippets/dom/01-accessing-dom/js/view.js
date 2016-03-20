// Display player score
function displayPlayerScore(node, state) {
  $(node).text(state.playerName + ': ' + state.score.player);
}

// Display CPU score
function displayCpuScore(node, state) {
  $(node).text('CPU: ' + state.score.cpu);
}

// Display clock
function displayClock(node, state) {
  $(node).text('Time: ' + state.time);
}

// Convert table to checkboard
function convertToCheckboard(table) {
  $(table).find('tr').each(function (rowIndex) {
    $(this).find('td').each(function (cellIndex) {
      $(this).addClass( (rowIndex + cellIndex) % 2 === 0 ? 'black' : '');
    });
  });
  return table;
}

function updateView(state) {
  
}
