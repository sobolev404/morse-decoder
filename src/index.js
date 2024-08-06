const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let words = expr.split("**********").map((word) => getLetters(word));

  function getLetters(word) {
    let letters = [];
    for (let i = 0; i < word.length; i += 10) {
      letters.push(word.slice(i, i + 10));
    }
    return letters;
  }
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      let chars = [];
      for (let ch = 0; ch < words[i][j].length; ch += 2) {
        if (words[i][j].slice(ch, ch + 2) !== "00") {
          chars.push(words[i][j].slice(ch, ch + 2));
        }
      }
      words[i][j] = chars;
    }
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      for (let k = 0; k < words[i][j].length; k++) {
        if (words[i][j][k] === "10") {
          words[i][j][k] = ".";
        } else {
          words[i][j][k] = "-";
        }
      }
    }
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      words[i][j] = words[i][j].join("");
    }
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      words[i][j] = MORSE_TABLE[words[i][j]];
    }
  }

  return (words.map((item) => item.join("")).join(" "));
}

module.exports = {
  decode,
};
