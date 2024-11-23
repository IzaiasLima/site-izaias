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
                    showToast("Obrigado! Retornaremos seu contato logo que for possível.");
                    console.log('EMAIL SUCCESS!');
                },
                (error) => {
                    const msg = "Desculpe, não foi possível enviar sua mensagem. Tente novamente mais tarde.";
                    showToast(msg, true);
                    console.log('EMAIL SENDER FAILED: ', error);
                },
            );
        });
    }
}

function isNotNull(obj) {
    return obj && obj !== 'null' && obj !== 'undefined';
}

function showToast(msg, err = false) {
    if (msg != null) {
        const toast = document.getElementById('toast');
        const len = msg.length;

        if (err) {
            toast.classList.add('err');
        } else {
            toast.classList.add('ok');
        }

        toast.innerHTML = msg;
        toast.classList.add('show', 'animate__fadeInUp');
        setTimeout(function () { toast.classList.remove('show', 'ok', 'err', 'animate__fadeInUp') }, len * 150);
    }
}