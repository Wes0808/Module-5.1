/* service_1upo89r 
template_ay34op1 
MCjPEhF1uQPmKkpIg*/

function contact(event) {
    event.preventDefault();
    const load = document.querySelector('.modal__overlay--load');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' modal__overlay--visible';

    emailjs
        .sendForm(
            'service_1upo89r',
            'template_ay34op1',
            event.target,
            'MCjPEhF1uQPmKkpIg'
        ).then(() => {
            load.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            load.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. please contact me directly on guywes1979@gmail.com"
            );
        })
}
    