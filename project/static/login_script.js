var special_characters = document.getElementById("table-login-container").getAttribute("special-characters").replace(/[\[\]']/g, '').split(',').map(e => e.trim());
var alphabets = document.getElementById("table-login-container").getAttribute("alphabets").replace(/[\[\]']/g, '').split(',').map(e => e.trim());
var colors = document.getElementById("table-login-container").getAttribute("colors").replace(/[\[\]']/g, '').split(',').map(e => e.trim());
var register_color = document.getElementById("table-login-container").getAttribute("register-color")
var password_text = document.getElementById("password-text")
var div_color = document.getElementsByClassName("grid-row3")

count = 0
document.querySelectorAll('.grid-row3').forEach(element => {
    element.setAttribute("style",`background-color: #${colors[count]}`)
    count += 1
})

for (let i=0; i<div_color.length; i++) {
    div_color[i].id = i+1;
}

document.getElementById("left-button").addEventListener("click", ()=>{
    colors.push(colors[0]);
    colors = colors.slice(1,);
    console.log(colors);
    for (let i=0; i<colors.length; i++) {
        document.getElementById(`${i+1}`).setAttribute('style',`background-color: #${colors[i]}`)
    }
});

document.getElementById("right-button").addEventListener("click", ()=>{
    colors.unshift(colors[colors.length-1]);
    colors = colors.slice(0,colors.length-1);
    console.log(colors)
    for (let i=0; i<colors.length; i++) {
        document.getElementById(`${i+1}`).setAttribute('style',`background-color: #${colors[i]}`)
    }
});

document.getElementById("up-button").addEventListener("click", ()=>{
    password_text.value += special_characters[colors.indexOf(register_color)]
});

document.getElementById("down-button").addEventListener("click", ()=>{
    password_text.value += alphabets[colors.indexOf(register_color)]
});