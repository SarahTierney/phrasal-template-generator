var color;
var creature;
var adjective;
var verb;
var story;

alert('Lets make a story together!');

color = prompt('A colour (orange, indigo, etc.)')
creature = prompt('A creature (dragon, moth, etc.)')
adjective = prompt('An adjective (beautiful, super, etc.)')
verb = prompt('A past tense verb (ran, burped, etc.)')
story = prompt('Which story would you like? \nEnter the letter below: \na) Snacking \nb) Escaping \nc) Winning')

a = function () {
  document.write('After snacking on ' + adjective + ' treats, the ' + colour + ' bellied ' + creature + ' ' + verbed + ' for hours.');
}

b = function () {
  document.write('Ameilia ' + verbed + ' through the ' + adjective + (' ') + colour + ' nebula escaping the space ' + creature + '.');
}

c = function () {
  document.write('Jackson chose his ' + adjective + ', ' + colour + (' ') + creature + ' card and ' + verbed + ' it to the table knowing he won.');
}

if (story == 'a' || story == 'A') {
  a();
} else if (story == 'b' || story == 'B') {
  b();
} else if (story == 'c' || story =='C') {
  c();
}
