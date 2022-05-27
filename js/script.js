window.onload = function () {
    let buttons = document.getElementsByClassName('tab-button');

    Array.prototype.forEach.call(buttons, function(button) {
        button.addEventListener('click', function (e) {
            let targetTab = e.target.getAttribute('data-tag');
        
            let folders = document.getElementsByClassName('folder');
            Array.prototype.forEach.call(folders, function (folder) {
                let tab = folder.getAttribute('data-tab');
                if (targetTab === 'all' || targetTab === tab) {
                    folder.classList.add('visible');
                } else {
                    folder.classList.remove('visible');
                }
            });

            document.querySelector('button.active').classList.remove('active');
            button.classList.add('active');
        })
    });

    let app = document.getElementById('text-writer');

    let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
    });


    typewriter
    .pauseFor(500)
    .typeString('Web Design')
    .pauseFor(300)
    .deleteChars(10)
    .typeString('Sviluppo front-End')
    .pauseFor(300)
    .deleteChars(18)
    .typeString('Arte 3D')
    .pauseFor(1000)
    .start();
}