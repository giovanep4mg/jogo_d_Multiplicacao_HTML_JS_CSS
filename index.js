const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

const questaoE1 = document.getElementById("questao");

const inputE1 = document.getElementById("input");

const formE1 = document.getElementById("form");

const pontoE1 = document.getElementById("ponto")

let ponto = JSON.parse(localStorage.getItem("ponto"));

if (!ponto) {
      ponto = 0;
}

pontoE1.innerText = "ponto :"+ponto ;

questaoE1.innerText = "Quanto é " + num1 +" multiplicado por " + num2 + " ? "



const correctAns = num1 * num2;

formE1.addEventListener("submit", () => {
    const userAns = +inputE1.value;
    if (userAns == correctAns) {
        ponto++
        updateLocalStorage()
    } else {
        ponto--
        updateLocalStorage()
    }

})

function updateLocalStorage() {
    localStorage.setItem("ponto", JSON.stringify(ponto))
}
