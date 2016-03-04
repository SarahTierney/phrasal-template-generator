var color;
var creature;
var adjective;
var verb;
var story;

alert('Lets make a story together!');

color = promt('A colour (orange, indigo, etc.)')
creature = promt('A creature (dragon, moth, etc.)')
adjective = promt('An adjective (beautiful, super, etc.)')
verb = promt('A past tense verb (ran, burped, etc.)')
story = promt('Which story would you like? \nEnter the letter below: \na) Snacking \nb) Escaping \nc) Winning')

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
