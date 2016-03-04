var color;
var creature;
var adjective;
var verb;
var story;

var a;
var b;
var c;

alert('Let’s make a story together!');

color = prompt('A color (orange, indigo, etc.)');
creature = prompt('A creature (dragon, moth, etc.)');
adjective = prompt('An adjective (beautiful, super, etc.)');
verb = prompt('A past tense verb (ran, burped, etc.)');
story = prompt('Which story would you like? \nEnter the letter below: \na) Snacking \nb) Escaping \nc) Winning');

a = function () {
  document.write('After snacking on ' + adjective + ' treats, the ' + color + ' bellied ' + creature + (' ') + verb + ' for hours.');
};

b = function () {
  document.write('Ameilia ' + verb + ' through the ' + adjective + (' ') + color + ' nebula escaping the space ' + creature + '.');
};

c = function ()  {
  document.write('Jackson chose his ' + adjective + ', ' + color + (' ') + creature + ' card and ' + verb + ' it to the table knowing he won.');
};

if (story == 'a' || story == 'A') {
  a();
} else if (story == 'b' || story == 'B') {
  b();
} else if (story == 'c' || story == 'C') {
  c();
}
