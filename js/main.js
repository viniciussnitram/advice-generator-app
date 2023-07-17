const url = 'https://api.adviceslip.com/advice';
let id = document.getElementById("id-advice");
let advice = document.getElementById("text-advice");
let btnAdvice = document.getElementById("submit-advice");
let copyAdvice = document.getElementById("copy-advice");

window.onload = showAdvice;

async function showAdvice() {
    const response = await axios.get(url);
    id.textContent = response.data.slip.id;
    advice.textContent = `\u{201C}${response.data.slip.advice}\u{201D}`;
}

btnAdvice.addEventListener('click', showAdvice);

advice.addEventListener('click', () => {
    navigator.clipboard.writeText(advice.textContent);
    copyAdvice.classList.add('copy-advice-animation');
    copyAdvice.style.display = 'block';
    setTimeout(() => {
        copyAdvice.style.display = 'none';
    }, 2000);
})