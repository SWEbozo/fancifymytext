function popupAlert() {
    alert("Hello, world!");
}

function increaseTextSize(){
    var displayedText = document.getElementById("displayedText");
    displayedText.style.fontSize = "2em";
}

function newStyle(){
    var radioButton = document.getElementById("BoringBetty");
    alert("Style changed!");
    var displayedText = document.getElementById("displayedText");

    if(radioButton.checked){
        displayedText.style.fontWeight = "normal";
        displayedText.style.color = "";
        displayedText.style.textDecoration = "";
    }
    else{
        displayedText.style.fontWeight = "bold";
        displayedText.style.color = "blue";
        displayedText.style.textDecoration = "underline";
    }
}

function mooify(){
    var displayedText = document.getElementById("displayedText");

    var sentence = displayedText.value.toUpperCase().split(".");
    sentence = sentence.join("-Moo");
    displayedText.value = sentence;

}