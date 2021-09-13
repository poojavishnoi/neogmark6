var translatebtn = document.querySelector("#click");
var textinput = document.querySelector("#txt-input");
var textoutput = document.querySelector("#txt-output");

translatebtn.addEventListener("click", clickEventHandler);

var url = "	https://api.funtranslations.com/translate/minion.json";

function getUrlData (text){
  return url + "?text=" + text;
}

function errorHandler(error){
  console.error("Error occured", error);
}

function clickEventHandler(){
  var inputText = textinput.value;

  fetch(getUrlData(inputText))
    .then(resp => resp.json())
    .then(data => {
      textoutput.innerHTML = data.contents.translated;
      console.log(data.contents.translated)})
    
    .catch(errorHandler)

  

}