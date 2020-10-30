function myFunction() {

    document.getElementById("shopnow").style.visibility = 'hidden';
    document.getElementById("plus").style.visibility = 'visible';
    document.getElementById("minus").style.visibility = 'visible';
}

// Fitur Checkout

var i = 0;

function incrNumber() {
    if (i < 9) {
        i++;
    } else if (i = 10) {
        i = "9+";
    }
    document.getElementById("display").innerHTML = i;
}

function decrNumber() {

    if (i > 0) {
        i--;
    } else if (i = "9+") {
        i = 9;
    }
    document.getElementById("display").innerHTML = i;
};