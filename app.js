const container = document.querySelector('.wrapper');
const panelButtons = document.querySelectorAll('.panel-btn')


panelButtons.forEach(button => button.addEventListener(('click'), () => {
    container.classList.toggle('active-panel')
}
))

