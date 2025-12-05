function changeFont() {
    document.getElementById("Text").style.fontSize = "3em";
}

function upperText() {
    // capitalize text
    document.getElementById("Text").value = document.getElementById("Text").value.toUpperCase();

    // add Moo to the end of the last words in a sentence
    let parts = document.getElementById("Text").value.split(".");
    document.getElementById("Text").value = parts.join("moo.");
}
 
function addStyle() {
    if (document.getElementById("FancyShmancy").checked) {
        document.getElementById("Text").style.fontWeight = "bold";
        document.getElementById("Text").style.color = "blue";
        document.getElementById("Text").style.textDecoration = "underline";
    }
}

function removeStyle() {
    if (document.getElementById("BoringBetty").checked) {
        document.getElementById("Text").style.fontWeight = "normal";
        document.getElementById("Text").style.color = "black";
        document.getElementById("Text").style.textDecoration = "none";
    }

}