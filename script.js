let generate = document.getElementById("generate");
let money = document.getElementById("money");
let reset = document.getElementById("reset");
let currentMoney = 0;



generate.addEventListener('click', function() {
    currentMoney += 1;
    localStorage.setItem("savedMoney", currentMoney);
    money.innerText = currentMoney;
});

let savedMoney = localStorage.getItem("savedMoney");
if (savedMoney) {
    money.innerText = savedMoney;
    currentMoney = parseInt(savedMoney);
}

reset.addEventListener("click", function() {
    localStorage.setItem("savedMoney","0");
    money.innerText = 0;
    currentMoney = 0;
});