const url = 'https://api.adviceslip.com/advice';
let id = document.getElementById("id-advice");
let advice = document.getElementById("text-advice");
let btnAdvice = document.getElementById("submit-advice");

window.onload = showAdvice;

async function showAdvice() {
    const response = await axios.get(url);
    id.textContent = response.data.slip.id;
    advice.textContent = `\u{201C}${response.data.slip.advice}\u{201D}`;
}

btnAdvice.addEventListener('click', showAdvice);