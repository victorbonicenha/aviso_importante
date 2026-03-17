function mostrarBlush() {
    document.getElementById("container").style.display = "none";

    setTimeout(() => {
        document.getElementById("blushScreen").style.display = "block";
    }, 500); // delayzinho pra dar suspense
}

function irFeliz() {
    window.location.href = "feliz.html";
}

function irTriste() {
    window.location.href = "triste.html";
}