window.onload = function () {
    var app = document.getElementById('text-writer');


    var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
    });


    typewriter
    .pauseFor(500)
    .typeString('Web Design')
    .pauseFor(300)
    .deleteChars(10)
    .typeString('3D Design')
    .pauseFor(300)
    .deleteChars(9)
    .typeString('Sviluppo Front-End')
    .pauseFor(1000)
    .start();
}