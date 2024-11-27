function copiarTexto() {
    const areaTemporal = document.createElement("textarea");
    areaTemporal.value = "mc.yolitia.es";

    document.body.appendChild(areaTemporal);
    areaTemporal.select();

    document.execCommand("copy");

    document.body.removeChild(areaTemporal);

    alert("IP copiada al portapapeles");
}

function faq() {
    document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
      });
    });
}

document.addEventListener('DOMContentLoaded', faq);