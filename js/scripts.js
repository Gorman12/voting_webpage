$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#vote').show();
  } else if (age === 18) {
    alert("CONGRAGULATIONS FOR HAVING THE ABILITY TO  VOTE");
    $('#vote').show();
  } else {
    $('#under-18').show();
  }
});
