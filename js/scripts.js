var countUpBy = function (total, multiple) {

  var arrayOutput = [];
  for (var i = multiple; i <= total; i += multiple) {
    arrayOutput.push(i);
  };
  return arrayOutput;
};


// $(document).ready(function() {
//   $("form#countUpBy").submit(function(event) {
//
//     var total = $("input#total").val();
//     var multiple = $("input#multiple").val();
//
