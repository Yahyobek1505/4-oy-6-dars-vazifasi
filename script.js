let son1 = 5; //+prompt("birinchi sonni kiriting.")
let son2 = 2; //+prompt("ikkinchi sonni kiriting.")
let son3 = 3; //+prompt("Uchinchi sonni kiriting.")
function salom(max) {
  if (son1 > son2) {
    max = son1;
  } else{
    max =son2;
  }
  if (max < son3) {
    max = son3;
  }
  return max;
}

console.log(salom());
