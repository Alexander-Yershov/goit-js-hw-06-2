const incrementEl = document.querySelector("[data-action = 'increment']");
const decrementEl = document.querySelector("[data-action = 'decrement']");
const valueEl = document.querySelector('#counter #value');
let counterValue = 0;
decrementEl.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

incrementEl.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});