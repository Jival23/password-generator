let obj = {
    nums: "0123456789",
    syms: "!@#$%^&*()_-=+/{}[]|:;<>?,.",
    letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

let optionsArr = ["1", "1", "1"]
let passwordLength = document.getElementById("length-el").value

/*
Format of options array:
- options[0] indicates whether to include letters
- options[1] indicates whether to include numbers
- options[2] indicates whether to include symbols
*/ 

function updateLength() {
    passwordLength = document.getElementById("length-el").value
}

function generatePasswords() {
    document.getElementById("feedback-el").textContent = ""
    let password1 = ""
    let password2 = ""
    let tempStr = ""
    options = optionsArr.join("")
    switch (options) {
        case "001":
            tempStr = obj.syms
            break
        case "010":
            tempStr = obj.nums
            break
        case "011":
            tempStr = obj.nums + obj.syms
            break
        case "100":
            tempStr = obj.letters
            break
        case "101":
            tempStr = obj.letters + obj.syms
            break
        case "110":
            tempStr = obj.letters + obj.nums
            break
        case "111":
            tempStr = obj.letters + obj.nums + obj.syms
            break
        default:
            document.getElementById("feedback-el").textContent = "No password options were specified. Please specify at least one option."
            return 
    }

    let characters = tempStr.split("")
    for (let i = 0; i < passwordLength; i++) {
        password1 += characters[Math.floor(Math.random()*characters.length)]
        password2 += characters[Math.floor(Math.random()*characters.length)]
    }
    document.getElementById("out1-el").textContent = password1
    document.getElementById("out2-el").textContent = password2
}

function updateNums() {
    if (optionsArr[1] === "1") {
        document.getElementById("nums-btn").textContent = "Include numbers"
        optionsArr[1] = "0"
    }
    else {
        document.getElementById("nums-btn").textContent = "Exclude numbers"
        optionsArr[1] = "1"
    }
}

function updateLetters() {
    if (optionsArr[0] === "1") {
        document.getElementById("letters-btn").textContent = "Include letters"
        optionsArr[0] = "0"
    }
    else {
        document.getElementById("letters-btn").textContent = "Exclude letters"
        optionsArr[0] = "1"
    }
}

function updateSyms() {
    if (optionsArr[2] === "1") {
        document.getElementById("syms-btn").textContent = "Include symbols"
        optionsArr[2] = "0"
    }
    else {
        document.getElementById("syms-btn").textContent = "Exclude symbols"
        optionsArr[2] = "1"
    }
}

function copyPassword1() {
    document.getElementById("feedback-el").textContent = "Password 1 copied to clipboard."
}

function copyPassword2() {
    document.getElementById("feedback-el").textContent = "Password 2 copied to clipboard."
}
