var run = function() {
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var solution = document.getElementById("solution");
  var answer = length * width;
  var answer2 = +length + +width + +length + +width;
  if (length.length > 0 && width.length > 0) {
    if (isNaN(answer) === false && isNaN(answer2) === false) {
      solution.innerHTML = "Area =&nbsp&nbsp&nbsp&nbsp" + answer + "<br>Perimeter =&nbsp&nbsp&nbsp&nbsp" + answer2;
    } else {
      solution.innerHTML = "invalid entry";
    }
  } else {
    solution.innerHTML = "";
  }
}
