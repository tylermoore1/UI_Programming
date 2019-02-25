var correctWord = "";
var guessWord = "";
var countNumberOfWrongAttempts = 0;
var isGameOver = false;


var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',
                'U','V','W','X','Y','Z']

$(document).ready(function() { // do this when the document is loaded

  correctWord = prompt('What\'s your word?','');
  correctWord = correctWord.toLowerCase();

  //guessWord = "";
  for (var i = 0; i < correctWord.length; i++) {
    if (correctWord[i] == " ") {
      guessWord += " ";
    }
    else {
      guessWord += "_";
    }
  }

  //now need to loop through guessWord and fix the spacing
  var wordWithSpaces = "";
  for (var i = 0; i < guessWord.length; i++) {
    if (guessWord[i] == " ") {
      wordWithSpaces += "  ";
    }
    else if (guessWord[i] == "_") {
      wordWithSpaces += "_ ";
    }
    else {
      wordWithSpaces += guessWord[i];
    }
  }
  $("#idCorrectWord").val(wordWithSpaces);

  //correctWord = correctWord.replace(/ /g, "");


  for (var i = 0; i < letters.length; i += 1) {
    $(".tableOfLetters").append('\
      <div class="col-2 col-sm-2 col-md-1 eachIndividualLetterDiv"> \
        <button style="width:100%; font-size:2vmin" class="btn btn-light eachIndividualLetter" id="' + letters[i] + '">' + letters[i] + '</button> \
      </div>');
  }

});

$(".container").on("click",".eachIndividualLetter", function() {
  var id = this.innerText.toLowerCase();

  //use this check to make sure button is only pressed once
  if ($(this).hasClass('btn-light')) {
    checkLetter(id);
    $(this).removeClass("btn btn-light").addClass("btn btn-dark");
  }
  else if (isGameOver == false) {
    alert ('Letter ' + id.toUpperCase() + ' was already used');
  }

});

//use this function to allow user to type in a letter instead of pressing button
$(document).keypress(function(e) {

  var char = String.fromCharCode(e.which).toUpperCase();

  //use this check to make sure button is only pressed once
  if ($("#" + char).hasClass('btn-light')) {
    $("#" + char).removeClass("btn btn-light").addClass("btn btn-dark");
    char = char.toLowerCase();
    checkLetter(char);
  }
  else if (isGameOver == false) {
    alert ('Letter ' + char + ' was already used');
  }

});

//function to see if letter the user guessed is actually part of the word
function checkLetter(id) {

  //boolean value to see if user guessed a correct letter
  var hasUserGuessedCorrectly = false;

  var temp = guessWord;

  guessWord = "";
  for (var i = 0; i < correctWord.length; i++) {
    if (correctWord[i] == " ") {
      guessWord += " ";
    }
    else if (temp[i] != "_" && temp[i] != " ") {
      guessWord += temp[i];
    }
    else if (correctWord[i] == id) {
      guessWord += id;
      hasUserGuessedCorrectly = true;
    }
    else if (correctWord[i] != id) {
      guessWord += "_";
    }
  }

  if (hasUserGuessedCorrectly == false) {
    var guessedLetters = $("#idLettersUsedTextArea").val();
    guessedLetters += (id + "\n");
    $("#idLettersUsedTextArea").val(guessedLetters);

    //now need to check which attempt user is on to see which picture to show
    countNumberOfWrongAttempts += 1;
    if (countNumberOfWrongAttempts < 7) {
      $("#idHangManPicture").attr('src', 'hangman_' + countNumberOfWrongAttempts + '.png');
      if (countNumberOfWrongAttempts == 6) {
        isGameOver = true;
        alert ('Game over, you lost');

        for (var i = 0; i < letters.length; i++)
        {
          if ($("#" + letters[i]).hasClass('btn-light')) {
            $("#" + letters[i]).removeClass("btn btn-light").addClass("btn btn-dark");
          }
        }
      }
    }
  }

  //now need to loop through guessWord and fix the spacing
  var wordWithSpaces = "";
  for (var i = 0; i < guessWord.length; i++) {
    if (guessWord[i] == " ") {
      wordWithSpaces += "  ";
    }
    else if (guessWord[i] == "_") {
      wordWithSpaces += "_ ";
    }
    else {
      wordWithSpaces += guessWord[i];
    }
  }
  $("#idCorrectWord").val(wordWithSpaces);

  if (guessWord == correctWord) {
    alert ('You guessed correctly, you win!');
  }
}
