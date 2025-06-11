let generate = document.getElementById("generate");
let money = document.getElementById("money");
let reset = document.getElementById("reset");

// Ambil data dari localStorage saat halaman dibuka
let saved = localStorage.getItem("uang");
if (saved !== null) {
    money.innerHTML = saved;
}

generate.addEventListener('click', function() {
    let angka = Number(money.innerHTML);
    angka += 1;
    money.innerHTML = angka;
    localStorage.setItem("uang", angka); // Simpan ke localStorage
});

let autogene = document.getElementById("autogen").addEventListener('click', auto);

function auto() {
    if (Number(money.innerHTML) >= 10) {
        let interval = setInterval(function() {
        let angka = Number(money.innerHTML);
        angka += 1;
        money.innerHTML = angka;
        localStorage.setItem("uang", angka);
        }, 500);
    }
    autogene.style.display = "none";
}

// Event untuk tombol reset
reset.addEventListener('click', function() {
    money.innerHTML = 0;
    localStorage.setItem("uang", 0); // Reset data di localStorage
});


let user = document.getElementById("user");
let modal = document.getElementById("modal");

document.getElementById("login").addEventListener('click', function() {
    let username = document.getElementById("username").value;
    user.innerText=username;
    modal.style.display="none";

    
});