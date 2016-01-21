
var countUpBy = function(total, multiple) {

  if ((isNaN(total) || isNaN(multiple)) || (total === "" || multiple === "") || (total <= 0 || multiple <= 0)) {
   alert("Please enter numbers in both fields!");
   return false;
 } else {
  var arrayOutput = [];
  for (var i = multiple; i <= total; i += multiple) {
    arrayOutput.push(i);
  };
  return arrayOutput;
 }
};


$(document).ready(function() {
  $("form#countUpBy").submit(function(event) {

    var total = parseInt($("input#total").val());
    var multiple = parseInt($("input#multiple").val());
    var result = countUpBy(total, multiple);
    for (i = 0; i < result.length; i++) {
      $("#result").append("<li>" + result[i] + "</li>");
    };

    event.preventDefault();
  });
});
