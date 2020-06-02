
function age() {
  var birthYear = prompt("What year were you born...?");
  var age = (2020 - birthYear);
  var h1 = document.createElement('H1');
  var textAnswer = document.createTextNode('You are ' + age.toString() + ' Years old in 2020.');
  h1.setAttribute('id', 'age');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('age').remove();
}