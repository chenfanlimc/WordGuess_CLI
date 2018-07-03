// * **Letter.js**: Contains a constructor, Letter. 
// This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. That means the constructor should define:

function Letter(char) {
    this.letter_str = char;
    this.guessed = false;
    this.returnLetter = function () {
        if (this.guessed === true) {
            return this.letter_str;
        } else {
            return "_";
        }
    }
    this.checkChar = function (guess) {
        if (guess == this.letter_str) {
            this.guessed = true;
            return true
        }
    }
}

module.exports = Letter;