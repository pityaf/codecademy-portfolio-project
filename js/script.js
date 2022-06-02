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

    let burger = document.getElementById('burger');

    /* Open the sidenav */
    burger.addEventListener('click', function(e) {
        document.getElementById('navbar').style.width = "100%";
    });
  


    let cancel_btn = document.getElementsByClassName('cancel-btn');

    Array.prototype.forEach.call(cancel_btn, function(buttons) {
        buttons.addEventListener('click', function(e) {
            document.getElementById('navbar').style.width = '0';
        });
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
    .typeString('Sviluppo Front-End')
    .pauseFor(300)
    .deleteChars(18)
    .typeString('Arte 3D')
    .pauseFor(1000)
    .start();
}