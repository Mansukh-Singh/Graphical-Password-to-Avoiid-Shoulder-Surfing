let span_left_navbar = document.getElementById("span-left-navbar")
let title_left_navbar = document.getElementById("home-container").getAttribute("home-title")
let home_button = document.getElementById("home-button")
let background_circle1 = document.getElementById('background-circle1')
let background_circle2 = document.getElementById('background-circle2')
let background_circle3 = document.getElementById('background-circle3')
let left_navbar = document.getElementById('left-navbar')
let right_navbar = document.getElementById('right-navbar')
let registration_form = document.getElementById('registration-form')
let verification_input_container = document.getElementById("verification-input-container")
let table_login_container = document.getElementById("table-login-container")
let background = document.getElementById('background')
let button_form = document.getElementById('button-form')
let elements = ["register", "verify", "login"]
let title_name_attribute = document.querySelector('title').getAttribute('name')
console.log(title_name_attribute)

if (home_button) {
    home_button.addEventListener("click", () => {
        if (registration_form) {
            registration_form.classList.add("registration-form-transition-shrink")
        }
        if (verification_input_container) {
            verification_input_container.classList.add("verification-input-container-shrink")
        }
        if (table_login_container) {
            table_login_container.classList.add("table-login-container-shrink")
        }
        background_circle1.className += " background-circle1-click"
        background_circle2.className += " background-circle2-click"
        background_circle3.className += " background-circle3-click"
        left_navbar.className += " left-navbar-return"
        right_navbar.className += " right-navbar-return"
        function animation_pause() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 2000)
            })
        }

        (async function () {
            await animation_pause()
            if (registration_form) {
                registration_form.classList.add("registration-form-transition-shrink-paused")
                // registration_form.classList.remove("registration-form-transition")
                // registration_form.classList.remove("registration-form-transition-paused")
            }
            if (verification_input_container) {
                verification_input_container.classList.add("verification-input-container-shrink-paused")
            }
            if (table_login_container) {
                table_login_container.classList.add("table-login-container-shrink-paused")
            }
            background_circle1.className += " background-circle1-pause-animation"
            background_circle2.className += " background-circle2-pause-animation"
            background_circle3.className += " background-circle3-pause-animation"
            left_navbar.className += " left-navbar-return-pause"
            right_navbar.className += " right-navbar-return-pause"
            window.location.href = `/${document.getElementById("title").getAttribute("page")}`
        })()


    })
}

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, num)
    })
}

function title_wait() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 150)
    })
}

(async function () {
    await wait(2500)
    span_left_navbar.className = "span-left-navbar"
    for (const iterator of title_left_navbar) {
        await title_wait()
        span_left_navbar.innerHTML += iterator;
    }
})();

if (elements.indexOf(title_name_attribute) != -1) {
    async function main() {
        await wait(2000)
        background.className += " background-blur"
        if (registration_form) {
            registration_form.className += " registration-form-transition"
            await wait(2000)
            registration_form.className += " registration-form-transition-paused"
        }
    }
    main()
}

if (verification_input_container) {
    const verify_wait = () => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },2000)
        })
    }
    const expand_wait = () => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },2000)
        })
    }
    // verification_input_container.classList.add("verification-input-container-expand")
    (async function verify_main() {
        await expand_wait()
        verification_input_container.classList.add("verification-input-container-expand")
        await verify_wait()
        verification_input_container.classList.add("verification-input-container-expand-paused")
    })();
}

if (table_login_container) {
    const verify_wait = () => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },2000)
        })
    }
    const expand_wait = () => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },2000)
        })
    }
    // verification_input_container.classList.add("verification-input-container-expand")
    (async function verify_main() {
        await expand_wait()
        table_login_container.classList.add("table-login-container-expand")
        await verify_wait()
        table_login_container.classList.add("table-login-container-expand-paused")
    })();
}







