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

// Event untuk tombol reset
reset.addEventListener('click', function() {
    money.innerHTML = 0;
    localStorage.setItem("uang", 0); // Reset data di localStorage
});