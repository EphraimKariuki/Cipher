$(document).ready(function(){

  var sentence = prompt("Enter a sentence:");
  function magic(){
   var firstLetter = sentence.slice(0,1);
   var lastLetter = sentence.substr(-1);
   var result= firstLetter + lastLetter;
   return result;
  };

  function magic2(){
    return magic().toUpperCase();
  };
  function magic3(){
      var reverse = magic2().charAt(1) + magic2().charAt(0);
      return reverse;
  };
  function magic4(){
    var result = sentence + magic3();
    return result;
  };
  function magic5(){
    var index= sentence.length/2;
    return index.toFixed(0);
  };
  function magic6(){
    var index = magic5();
    var letter = sentence.substr(index,1);
    var result = letter + magic4();
    return result;
  };

  alert(magic());
  alert(magic2());
  alert(magic3());
  alert(magic4());
  alert(magic5());
  alert(magic6());
});
