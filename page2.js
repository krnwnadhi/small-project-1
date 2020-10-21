var i = 0;

function incNumber() {
    if (i < 9) {
        i++;
    } else if (i = 10) {
        i = "9+";
    }
    document.getElementById("display").innerHTML = i;
}