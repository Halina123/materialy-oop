function startGame(initialState) {

  makeInteractive($('table'));

  // Group intervals to handle time management
  var cpuActionIntervalId = setInterval(function () {
    var numberOfCells = $('td').length;
    $('td').eq(parseInt(Math.random() * numberOfCells)).trigger('click', true);
  }, 1000);

  var clockIntervalId = setInterval(function () {
    state.time -= 1;
    displayClock($clock, state);
  }, 1000);

  setTimeout(function () {
    clearInterval(cpuActionIntervalId);
    clearInterval(clockIntervalId);
    $('table').off('click');
  }, state.time * 1000);
}
