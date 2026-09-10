/* service_1upo89r 
template_ay34op1 
MCjPEhF1uQPmKkpIg*/

function contact(event) {
    event.preventDefault();
    /*emailjs
        .sendForm(
            'service_1upo89r',
            'template_ay34op1',
            event.target,
            'MCjPEhF1uQPmKkpIg'
        ).then(() => {
            
        })*/
    
    const load = document.querySelector('.modal__overlay--load')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";

    setTimeout(() => {
        load.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }, 1000);
}
    