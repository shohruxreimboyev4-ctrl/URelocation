// if1
let n1 = Number(prompt("if1: Butun son kiriting"));
if (n1 > 0) {
  n1 = n1 + 1;
}
alert("Natija (if1): " + n1);

// if2
let n2 = Number(prompt("if2: Butun son kiriting"));
if (n2 > 0) {
  n2 = n2 + 1;
} else {
  n2 = n2 - 2;
}
alert("Natija (if2): " + n2);

// if3
let n3 = Number(prompt("if3: Butun son kiriting"));
if (n3 > 0) {
  n3 = n3 + 1;
} else if (n3 < 0) {
  n3 = n3 - 2;
} else {
  n3 = 10;
}
alert("Natija (if3): " + n3);

// if4
let a4 = Number(prompt("if4: A sonini kiriting"));
let b4 = Number(prompt("if4: B sonini kiriting"));
let c4 = Number(prompt("if4: C sonini kiriting"));

let musbatlar = 0;
if (a4 > 0) musbatlar++;
if (b4 > 0) musbatlar++;
if (c4 > 0) musbatlar++;

alert("Natija (if4): " + musbatlar + " ta musbat son");

// if5
let a5 = Number(prompt("if5: A sonini kiriting"));
let b5 = Number(prompt("if5: B sonini kiriting"));
let c5 = Number(prompt("if5: C sonini kiriting"));

let musbatlar5 = 0;
let manfiylar5 = 0;

if (a5 > 0) musbatlar5++; else if (a5 < 0) manfiylar5++;
if (b5 > 0) musbatlar5++; else if (b5 < 0) manfiylar5++;
if (c5 > 0) musbatlar5++; else if (c5 < 0) manfiylar5++;

alert("Natija (if5): " + musbatlar5 + " ta musbat, " + manfiylar5 + " ta manfiy son");

// if6
let a6 = Number(prompt("if6: A sonini kiriting"));
let b6 = Number(prompt("if6: B sonini kiriting"));

if (a6 > b6) {
  alert("Natija (if6): katta son " + a6);
} else {
  alert("Natija (if6): katta son " + b6);
}

// if7
let a7 = Number(prompt("if7: A sonini kiriting"));
let b7 = Number(prompt("if7: B sonini kiriting"));

if (a7 > b7) {
  alert("Natija (if7): katta son index 1");
} else {
  alert("Natija (if7): katta son index 2");
}

// if8
let a8 = Number(prompt("if8: A sonini kiriting"));
let b8 = Number(prompt("if8: B sonini kiriting"));

if (a8 > b8) {
  alert("Natija (if8): " + a8 + " " + b8);
} else {
  alert("Natija (if8): " + b8 + " " + a8);
}

// if9
let a9 = Number(prompt("if9: A sonini kiriting"));
let b9 = Number(prompt("if9: B sonini kiriting"));

if (a9 > b9) {
  let temp = a9;
  a9 = b9;
  b9 = temp;
}
alert("Natija (if9): a=" + a9 + ", b=" + b9);

// if10
let a10 = Number(prompt("if10: A sonini kiriting"));
let b10 = Number(prompt("if10: B sonini kiriting"));

let yigindi = a10 + b10;
alert("Natija (if10): yig‘indi = " + yigindi);
