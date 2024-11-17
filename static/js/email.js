(function () {
    emailjs.init({
        publicKey: "53EtKuGY0c5TKn1ah",
    });
})();

window.onload = function () {
    const frmEmail = document.getElementById('contact-form')

    if (isNotNull(frmEmail)) {
        frmEmail.addEventListener('submit', function (event) {
            event.preventDefault();

            emailjs.sendForm('service_izaias_com_br', 'template_izaias_com_br', '#contact-form').then(
                (response) => {
                    frmEmail.reset();
                    alert("Obrigado. Retornaremos seu contato logo que for possível. ")
                    console.log('EMAIL SUCCESS!', response.status, response.text);
                },
                (error) => {
                    console.log('EMAIL SENDER FAILED: ', error);
                },
            );
        });
    }
}

function isNotNull(obj) {
    return obj && obj !== 'null' && obj !== 'undefined';
}