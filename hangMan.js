var correctWord = "";
var guessWord = "";;

$(document).ready(function() { // do this when the document is loaded

  correctWord = prompt('What\'s your word?','');
  correctWord = correctWord.toLowerCase();

  //guessWord = "";
  for (var i = 0; i < correctWord.length; i++) {
    guessWord += "_ ";
  }
  $("#idCorrectWord").val(guessWord);

  var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',
                  'U','V','W','X','Y','Z']


  for (var i = 0; i < letters.length; i += 1) {
    $(".tableOfLetters").append('\
      <div class="col-2 col-sm-2 col-md-1 eachIndividualLetterDiv"> \
        <button style="width:100%" class="btn btn-light eachIndividualLetter" id="' + letters[i] + '">' + letters[i] + '</button> \
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

});

//function to see if letter the user guessed is actually part of the word
function checkLetter(id) {

  //boolean value to see if user guessed a correct letter
  var hasUserGuessedCorrectly = false;

  var temp = guessWord;
  temp = temp.replace(/ /g, "");
  guessWord = "";
  for (var i = 0; i < correctWord.length; i++) {
    if (temp[i] != "_") {
      guessWord += temp[i];
    }
    else if (correctWord[i] == id) {
      guessWord += id;
      hasUserGuessedCorrectly = true;
    }
    else if (correctWord[i] != id) {
      guessWord += "_ ";
    }
  }

  if (hasUserGuessedCorrectly == false) {
    var guessedLetters = $("#idLettersUsedTextArea").val();
    guessedLetters += (id + "\n");
    $("#idLettersUsedTextArea").val(guessedLetters);
  }

  $("#idCorrectWord").val(guessWord);

  if (guessWord == correctWord) {
    alert ('You guessed correctly, you win!');
  }
}
