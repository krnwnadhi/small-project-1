const search = document.getElementById("filter");
const data = document.querySelectorAll(".kolom-utama div");


search.addEventListener("keyup", function (event) {
    // console.log(event);
    const q = event.target.value.toLowerCase();
    data.forEach((datas) => {
        datas.querySelector('p').textContent.toLowerCase().startsWith(q)
            ? (datas.style.display = '')
            : datas.style.display = 'none';
    }
    );
});