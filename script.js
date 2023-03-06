const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordlength = 16;
let genpass2 = "";
let sliderEl = document.getElementById("pdlength");
let sliderval = document.getElementById("pwdlengthdisplay");
let pdlengthlabel = document.getElementById("pdlengthlabel");

sliderEl.oninput = function () {
  pdlengthlabel.textContent = this.value;
};

function getrandomChar() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generatePasswords() {
  // pick a random character from the characters list
  let genpass1 = "";

  for (let i = 0; i < passwordlength; i++) {
    genpass1 += getrandomChar();
  }

  console.log(genpass1);

  // add it to the new password string
  // keep doing it for the length of the password
}
