"use strict";
function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /([+-]?\d+(?:[\.,]\d+)?)(?:[eE]([-+]?\d+(?:[\.,]\d+)?))?\s*([FfcC])/;
  var m = temp.match(regexp);
  if (m) {
    var num = m[1];
    var expo = m[2];
    var type = m[3];
    num = parseFloat(num);
    if (m[2]) {
      expo = parseFloat(expo);
      num = Math.pow(num, expo);
    }
    if (type == 'c' || type == 'C') {
      result = (num * 9 / 5) + 32;
      result = result.toFixed(2);
      result = result + ' F';
    } else {
      result = (num - 32) * 5 / 9;
      result = result.toFixed(2);
      result = result + ' C';
    }
    converted.innerHTML = result;
  } else {
    converted.innerHTML = "ERROR!! Intentalo con algo como '42,1 C'";
  }
}