var countUpBy = function (total, multiple) {

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


// $(document).ready(function() {
//   $("form#countUpBy").submit(function(event) {
//
//     var total = $("input#total").val();
//     var multiple = $("input#multiple").val();
//
