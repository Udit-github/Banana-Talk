var btnref = document.querySelector("#btn-ref");
var txtinput= document.querySelector("#txt-area");
var outputText= document.querySelector("#txt-area-output");

var url="https://api.funtranslations.com/translate/minion.json";


function translatedUrl(text){
    return url+"?"+"text= "+text;
}
btnref.addEventListener("click",function clickHandler(){
    // console.log("It worked");
    // console.log("input",txtinput.value);

    var inputFinal = txtinput.value;
    

    fetch(translatedUrl(inputFinal))   // or we can write like fetch(translatedUrl(inputFinal))
    .then(response => response.json())
    .then(json => { //console.log(json)
         var translatedText=json.contents.translated;
         outputText.innerText= translatedText;
    }) 

    
})

 