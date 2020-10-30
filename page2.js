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

// Akhir Fitur Checkout

// Fitur Pop Up

// function myFunction() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
// }

// Akhir Fitur Pop Up

// IF

// function fitur() {
//     if (i = 0) {
//         alert("Keranjangmu Kosong")
//     } else if (i > 9) {
//         alert("Keranjang Belanja Kamu penuh. Ayo Dong di Checkout")
//     } else {
//         alert("Ayo Dong di Checkout")
//     }
// }

// Akhir IF