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

if (story == 'a') {
  document.write('After snacking on ' + adjective + ' treats, the ' + colour + ' bellied ' + creature + ' + verb + ' for hours.');
};

if (story == 'b') {
  document.write('Ameilia ' + verbed + ' through the " + adjective + " ' + colour + ' nebula escaping the space ' + creature + '.');
};

if (story == 'c') {
  document.write('Jackson chose his ' + adjective + ', ' + colour + ' ' + creature + ' card and ' + verbed + ' it to the table knowing he won.');
};
