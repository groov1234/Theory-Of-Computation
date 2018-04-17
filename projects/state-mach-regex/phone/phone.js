var readline = require('readline');



var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;
    // Find matches
    const matcher = line.match(regex);
    // if no number found print that no number was found
    if (matcher === null) {
      console.log("Phone Number does not exist");
    } else {
      // else print number with no spaces, parens, or dashes
      console.log(`${matcher[1]}${matcher[2]}${matcher[3]}`);
    }
});
