$(document).ready(function() { // do this when the document is loaded

  var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',
                  'U','V','W','X','Y','Z','']

  for (var i = 0; i < letters.length; i += 9){
    $("#idTableOfLetters").append('\
      <tr> \
        <td> <button class="btn btn-light" id="' + letters[i] + '">' + letters[i] + '</button> </td> \
        <td> <button class="btn btn-light" id="' + letters[i+1] + '">' + letters[i+1] + '</button> </td> \
        <td> <button class="btn btn-light" id="' + letters[i+2] + '">' + letters[i+2] + '</button> </td> \
        <td> <button class="btn btn-light" id="' + letters[i+3] + '">' + letters[i+3] + '</button> </td> \
        <td> <button class="btn btn-light" id="' + letters[i+4] + '">' + letters[i+4] + '</button> </td> \
        <td> <button class="btn btn-light" id="' + letters[i+5] + '">' + letters[i+5] + '</button> </td> \
        <td> <button class="btn btn-light" id="' + letters[i+6] + '">' + letters[i+6] + '</button> </td> \
        <td> <button class="btn btn-light" id="' + letters[i+7] + '">' + letters[i+7] + '</button> </td> \
        <td> <button class="btn btn-light" id="' + letters[i+8] + '">' + letters[i+8] + '</button> </td> \
      </tr>')
  }

});
