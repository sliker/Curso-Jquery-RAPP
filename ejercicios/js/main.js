$(document).ready(function() {
  // Ejercicios JS

  // jQuery
  $('.btn-send').click(function(event) {
    event.preventDefault();
    var userName = $('.user-name').val();
    $('.hello').text(userName);
  });

});

function myFunction() {
  document.getElementById("demo").innerHTML = Date();
}