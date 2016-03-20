var moves = { rock: {}, paper: {}, scissors: {}};
undefined
moves.rock
Object {}
var p1 = [moves.rock, moves.paper, moves.paper];
undefined
p1
[Object__proto__: Object, Object, Object]
var p2 = [moves.paper, moves.rock, moves.rock];
undefined
moves.rock.beats = moves.scissors;
Object {}
moves.paper.beats = moves.rock;
Object {beats: Object}
moves.scissors.beats = moves.paper;
Object {beats: Object}
p1[0].beats === p2[0] ? 'p1 wins' : 'p2 wins'
"p2 wins"
p1[0] !== p2[0] ? (p1[0].beats === p2[0] ? 'p1 wins' : 'p2 wins') : 'draw'
"p2 wins"
var whoWins = function (p1move, p2move) {
Uncaught SyntaxError: Unexpected end of input(…)
var whoWins = function (p1move, p2move) {
  p1move !== p2move ? (p1move.beats === p2move ? 'p1 wins' : 'p2 wins') : 'draw'
}
undefined
whoWins(p1[0], p2[0])
undefined
var whoWins = function (p1move, p2move) {
  return p1move !== p2move ? (p1move.beats === p2move ? 'p1 wins' : 'p2 wins') : 'draw'
}
undefined
whoWins(p1[0], p2[0])
"p2 wins"
whoWins(p1[1], p2[1])
"p1 wins"
p1.push(moves.rock)
4
p2.push(moves.rock)
4
whoWins(p1[3], p2[3])
"draw"
