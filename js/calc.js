var sum = ""

var display = document.querySelector("#screen");


var numbers = document.querySelectorAll(".buttonNum");
for (var i = 0; i < numbers.length; i++){
  var number = numbers[i];
  number.addEventListener("click", function(){
    sum += this.innerHTML;
    display.innerHTML = sum;
  })
}

var ops = document.querySelectorAll(".operator");
for (var i = 0; i < ops.length; i++){
  var op = ops[i];
  op.addEventListener("click", function(){
    sum += this.innerHTML;
    display.innerHTML = sum;
  })
}


var equal = document.querySelectorAll(".equals")[0]
equal.addEventListener("click", function() {
  var result = eval(sum)
  display.innerHTML = result;
  sum = "";
})

var ac = document.querySelectorAll(".buttonClear")[0];
ac.addEventListener("click", function(){
  sum = "";
  display.innerHTML = "Sparta Calcuator";
})
