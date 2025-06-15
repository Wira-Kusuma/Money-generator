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


let autogene1 = document.getElementById("autogen1");
let autogene2 = document.getElementById("autogen2");
let autogene3 = document.getElementById("autogen3");

autogene1.addEventListener('click', auto1);
autogene2.addEventListener('click', auto2);
autogene3.addEventListener('click', auto3);

function auto1() {
    if (Number(money.innerHTML) >= 10) {
        let interval = setInterval(function() {
        let angka = Number(money.innerHTML);
        angka += 1;
        money.innerHTML = angka;
        localStorage.setItem("uang", angka);
        }, 500);
    }
    autogene1.style.display = "none";
}
function auto2() {
    if (Number(money.innerHTML) >= 100) {
        let interval = setInterval(function() {
        let angka = Number(money.innerHTML);
        angka += 1;
        money.innerHTML = angka;
        localStorage.setItem("uang", angka);
        }, 500);
    }
    autogene2.style.display = "none";
}
function auto3() {
    if (Number(money.innerHTML) >= 500) {
        let interval = setInterval(function() {
        let angka = Number(money.innerHTML);
        angka += 1;
        money.innerHTML = angka;
        localStorage.setItem("uang", angka);
        }, 500);
    }
    autogene3.style.display = "none";
}

// Event untuk tombol reset
reset.addEventListener('click', function() {
    money.innerHTML = 0;
    localStorage.setItem("uang", 0); // Reset data di localStorage
});

// user login modal
let user = document.getElementById("user");
let modal = document.getElementById("modal");

document.getElementById("login").addEventListener('click', function() {
    let username = document.getElementById("username").value;
    user.innerText=username;
    modal.style.display="none";
});

// logout
let logout = document.getElementById("logout");

logout.addEventListener("click", function() {
    user.innerHTML="";
    modal.style.display="flex";
});