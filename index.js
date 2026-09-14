/* service_1upo89r 
template_ay34op1 
MCjPEhF1uQPmKkpIg*/

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast () {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const load = document.querySelector('.modal__overlay--load');
    const success = document.querySelector('.modal__overlay--success');
    load.classList += ' modal__overlay--visible';

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

function toggleModal(){
    /* Toggle Modal */
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
    