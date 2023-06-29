let id = document.getElementById("id-advice");
let advice = document.getElementById("text-advice");
let btnAdvice = document.getElementById("submit-advice");

window.onload = showAdvice;

function showAdvice() {
    axios
    .get("https://api.adviceslip.com/advice")
    .then(function (response) {
        console.log(response.data);
        id.textContent = response.data.slip.id;
        advice.textContent = response.data.slip.advice;
    })
    .catch(function (error) {
        console.log(error);
    });
}

btnAdvice.addEventListener('click', showAdvice);