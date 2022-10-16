const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const emailValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value;
    if (emailValue.length && passwordValue.length !== 0) {
        const dataFormResult = {};
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
            dataFormResult[name] = value;
        });
        console.log(dataFormResult);
        form.reset();
    } else {
        alert('Заполните все поля')
    };
};
