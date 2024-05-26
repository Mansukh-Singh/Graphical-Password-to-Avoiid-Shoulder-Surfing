var regex = /^[!@#$%^&*ABCDEFGH]+$/;

document.getElementById('input-form-color').addEventListener('mouseenter', () => {
    document.getElementById('dropdown-input-form-color').removeAttribute('style')
})

document.getElementById('input-form-color').addEventListener('mouseleave', () => {
    document.getElementById('dropdown-input-form-color').setAttribute('style', 'visibility: hidden')
})

document.getElementById('dropdown-input-form-color').addEventListener('mouseenter', () => {
    document.getElementById('dropdown-input-form-color').removeAttribute('style')
})

document.getElementById('dropdown-input-form-color').addEventListener('mouseleave', () => {
    document.getElementById('dropdown-input-form-color').setAttribute('style', 'visibility: hidden')
})

let choose_color = document.querySelectorAll('.choose-color')

choose_color.forEach(element => {
    document.getElementById(`${element.id}`).addEventListener('mouseenter', () => {
        document.getElementById(`${element.id}`).style.boxShadow = '0px 0px 2px 2px white'
    })
    document.getElementById(`${element.id}`).addEventListener('click', () => {
        document.getElementById('input-form-color').value = document.getElementById(`${element.id}`).id.split('-')[0]
        document.getElementById('input-form-color').setAttribute('value', document.getElementById(`${element.id}`).getAttribute('value'))
    })
    document.getElementById(`${element.id}`).addEventListener('mouseleave', () => {
        document.getElementById(`${element.id}`).style.boxShadow = 'none'
    })
})

document.getElementById('input-form-password').addEventListener('mouseenter', () => {
    document.getElementById('dropdown-input-form-password').removeAttribute('style')
})

document.getElementById('input-form-password').addEventListener('mouseleave', () => {
    document.getElementById('dropdown-input-form-password').setAttribute('style', 'visibility: hidden')
})

document.getElementById('dropdown-input-form-password').addEventListener('mouseenter', () => {
    document.getElementById('dropdown-input-form-password').removeAttribute('style')
})

document.getElementById('dropdown-input-form-password').addEventListener('mouseleave', () => {
    document.getElementById('dropdown-input-form-password').setAttribute('style', 'visibility: hidden')
})

let symbol = document.querySelectorAll('.symbol')

symbol.forEach(element => {
    document.getElementById(`${element.id}`).addEventListener('mouseenter', () => {
        document.getElementById(`${element.id}`).style.boxShadow = '0px 0px 2px 2px white'
    })
    document.getElementById(`${element.id}`).addEventListener('click', () => {
        document.getElementById('input-form-password').value += document.getElementById(`${element.id}`).getAttribute('value')
    })
    document.getElementById(`${element.id}`).addEventListener('mouseleave', () => {
        document.getElementById(`${element.id}`).style.boxShadow = 'none'
    })
})

let clear_symbol_button = document.getElementById('clear-symbol-button')

clear_symbol_button.addEventListener("mouseenter", () => {
    document.getElementById("clear-symbol-button").style.boxShadow = '0px 0px 1px 1px white'
})

clear_symbol_button.addEventListener("mouseleave", () => {
    document.getElementById("clear-symbol-button").style.boxShadow = 'none'
})


clear_symbol_button.addEventListener('click', () => {
    document.getElementById('input-form-password').value = document.getElementById('input-form-password').value.slice(0, document.getElementById('input-form-password').value.length - 1)
})




