const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", () => {
    inputRef.addEventListener("input", (e) => {
        if (e.currentTarget.value.length === 6) {
            e.currentTarget.classList.add("valid");
            e.currentTarget.classList.replace("invalid", "valid");
        } else {
            e.currentTarget.classList.add("invalid");
            e.currentTarget.classList.replace("valid", "invalid");
        }
    })
});