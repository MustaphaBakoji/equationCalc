// let $ = (id) => {
//   return document.getElementById(id);
// };
let n;
let r;
var count = 0;
var mode = document.getElementById("mode");
var hide = document.getElementsByClassName("hideme");

var show = document.getElementsByClassName("showme");
mode.addEventListener("click", () => {
  count += 1;
  var but = document.getElementsByClassName("buts");
  // this showme class is removes other mth functions not needed in smlt eqn
  if (count % 2 == 1) {
    document.getElementById("but17").textContent = ",";
    for (let i = 0; i < hide.length; i++) {
      hide[i].classList.add("showme");
    }
    mode.innerText = "nml";
    but[25].classList.remove("smlt");
    but[26].classList.remove("smlt");
  }
  // the else part return us to normal mode
  else {
    document.getElementById("but17").textContent = ".";
    for (let i = 0; i < hide.length; i++) {
      hide[i].classList.remove("showme");
    }
    mode.innerText = "smlt mode";
    but[25].classList.add("smlt");
    but[26].classList.add("smlt");
  }
});
// this retun the factorail of a number
function factoria(n) {
  if (n <= 0) {
    return 1;
  } else {
    return n * factoria(n - 1);
  }
}
// this perfoms a combination function
function combination(n, r) {
  return factoria(n) / (factoria(n - r) * factoria(r));
}
// this return  a permutation function
function permutation(n, r) {
  return factoria(n) / factoria(n - r);
}
// this function perfporms anything related to equal sign
function equal() {
  var display = document.getElementById("display").textContent;

  if (display.includes("C")) {
    var list = display.split("C");
    n = parseInt(list[0]);
    r = parseInt(list[1]);
    document.getElementById("display").textContent = combination(n, r);
  } else if (display.includes("P")) {
    var list = display.split("P");
    n = parseInt(list[0]);
    r = parseInt(list[1]);
    document.getElementById("display").textContent = permutation(n, r);
  } else if (display.includes("X²")) {
    //we remove x2
    var xs = display.split("X²");
    //process of x
    var xvalue = xs[1].split("X");
    if (xs[0] == "") {
      var a = 1;
    } else {
      var a = Number(xs[0]);
    }
    if (xvalue[0] == "-") {
      var b = -1;
    } else if (xvalue[0] === "+") {
      var b = 1;
    } else {
      var b = Number(xvalue[0]);
    }

    var c = Number(xvalue[1]);
    var D = b ** 2 - 4 * a * c;
    if (D < 0) {
      document.getElementById("display").textContent = "imaginary number ";
    } else {
      let x1 = (-b + D ** 0.5) / (2 * a);
      let x2 = (-b - D ** 0.5) / (2 * a);
      document.getElementById("display").textContent = `X1 =${x1}  X2=${x2}`;
    }
  } else if (display.includes("Exp")) {
    var exponents = display.split("Exp");
    let exp_soln = Number(exponents[0]) * 10 ** Number(exponents[1]);
    document.getElementById("display").textContent = exp_soln;
  }
  //carrying out power
  else if (display.includes("Λ")) {
    var power = display.split("Λ");
    var answer = eval(power[0] ** power[1]);
    document.getElementById("display").textContent = answer;
  } else if (display.includes("√")) {
    squreroot = display.split("√");
    var squared = Math.sqrt(Number(squreroot[1]));
    document.getElementById("display").textContent = squared;
  } else if (display.includes(",")) {
    let equation = display.split(",");
    let first = equation[0];
    let aremoving = first.split("X");
    if (aremoving[0] == "-") {
      var a = -1;
    } else if (aremoving[0] == "") {
      var a = 1;
    } else {
      var a = aremoving[0];
    }

    var bremoving = aremoving[1].split("Y");
    if (bremoving[0] == "-") {
      var b = -1;
    } else if (bremoving[0] == "+") {
      var b = 1;
    } else {
      var b = bremoving[0];
    }

    var c = bremoving[1].split("=")[1];
    let second = equation[1];
    let dremoving = second.split("X");
    if (dremoving[0] == "-") {
      var d = -1;
    } else if (dremoving[0] == "") {
      var d = 1;
    } else {
      var d = dremoving[0];
    }

    var eremoving = dremoving[1].split("Y");
    if (eremoving[0] == "-") {
      var e = -1;
    } else if (eremoving[0] == "+") {
      var e = 1;
    } else {
      var e = eremoving[0];
    }

    var f = eremoving[1].split("=")[1];
    var y = eval((f * a - d * c) / (-b * d + a * e));
    var x = eval((c - b * y) / a);
    document.getElementById("display").textContent = `Y=${y},X=${x} `;
  } else {
    document.getElementById("display").textContent = eval(
      document.getElementById("display").textContent
    );
  }
}
var container = document.getElementsByClassName("buts");
// this area does most of the algorithm
// it attach id to each button and also attach each button or group of buttons
// to perfom specific operation
for (let i = 0; i < container.length; i++) {
  document.getElementsByClassName("buts")[i].setAttribute("id", `but${i + 1}`);
}
var val = 0;
for (let i = 0; i < container.length; i++) {
  if (i !== 24 && i !== 20) {
    if (i === 18) {
      document.getElementById("but19").addEventListener("click", equal);
    } else if (i === 23) {
      document.getElementById("but24").addEventListener("click", function () {
        document.getElementById("display").textContent +=
          document.getElementById("but24").textContent;
      });
    } else {
      document
        .getElementsByClassName("buts")
        [i].addEventListener("click", function () {
          document.getElementById("display").textContent +=
            document.getElementsByClassName("buts")[i].textContent;
          var expression = document.getElementById("display").textContent;
        });
    }
  } else if (i == 20) {
    document.getElementById("but21").addEventListener("click", () => {
      document.getElementById("display").textContent = "";
    });
  } else if (i == 24) {
    document.getElementById("but25").addEventListener("click", function () {
      var display = document.getElementById("display").textContent;
      //we dont know how it works
      var remain = display.slice(0, display.length - 1);
      document.getElementById("display").textContent = remain;
    });
  }
}

var but = document.getElementsByClassName("buts");
for (let i = 0; i < but.length; i++) {
  cEvent($(`but${i + 1}`), () => {
    $(`but${i + 1}`).style.opacity = 0.4;

    setTimeout(() => {
      $(`but${i + 1}`).style.opacity = 1;
    }, 200);
  });
}
