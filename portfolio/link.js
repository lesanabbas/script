// Left to Right 1
function openLefttoRight() {
    document.getElementById("mySideLeft").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeLefttoRight() {
    document.getElementById("mySideLeft").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Left to Right 2

function openLefttoRight1() {
    document.getElementById("mySideLeft1").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeLefttoRight1() {
    document.getElementById("mySideLeft1").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Left to Right 3

function openLefttoRight2() {
    document.getElementById("mySideLeft2").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeLefttoRight2() {
    document.getElementById("mySideLeft2").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Left to Right 4

function openLefttoRigh3() {
    document.getElementById("mySideLeft3").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeLefttoRight3() {
    document.getElementById("mySideLeft3").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function onMediaClick(id) {
    if(id === 'fb') {
        window.open("https://www.facebook.com/lesan.abbas");
    } else if(id === 'twitter') {
        window.open("https://twitter.com/lesan_abbas")
    } else if(id === 'linkedin') {
        window.open("https://www.linkedin.com/in/lesan-abbas-817a7b1a5/")
    } else if(id === 'insta') {
        window.open("https://www.instagram.com/lesan.abbas/")
    } else if(id === 'reddit') {
        window.open("https://www.reddit.com/user/Deadpool1110")
    }
}