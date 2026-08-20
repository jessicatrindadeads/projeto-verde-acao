const form = document.querySelector("#volunteer-form");
const statusMessage = document.querySelector("#form-status");
const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const name = form.elements.nome.value.trim().split(" ")[0];
    statusMessage.textContent = `Cadastro demonstrativo concluído, ${name}! Obrigada pelo interesse.`;
    form.reset();
});
