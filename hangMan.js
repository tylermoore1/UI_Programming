$(document).ready(function() { // do this when the document is loaded

  var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',
                  'U','V','W','X','Y','Z']


  for (var i = 0; i < letters.length; i += 1) {
    $("#idTableOfLetters").append('\
      <div class="col-md-1 eachIndividualLetter"> \
        <button class="btn btn-light" id="' + letters[i] + '">' + letters[i] + '</button>\
      </div>')
  }

});
