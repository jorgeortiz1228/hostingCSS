var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var noActionButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        //modal.style.display = 'block';
        //backdrop.style.display = 'block';
        
        //modal.className = 'open'; this won't work bc it will overwrite all other class lists
        
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function() {
            backdrop.classList.add('open');
        }, 10);
    });
}

if (noActionButton){
    noActionButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function() {
    //mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

function closeModal() {
    //modal.style.display = 'none';
    //backdrop.style.display = 'none';

    if (modal) {
        modal.classList.remove('open');
    }
    
    backdrop.classList.remove('open');
    setTimeout(function() {
        backdrop.style.display = 'none';
    }, 200);
}

toggleButton.addEventListener('click', function() {
    //mobileNav.style.display = 'block';
    //backdrop.style.display = 'block';

    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function() {
        backdrop.classList.add('open');
    }, 10);
});

ctaButton.addEventListener('animationstart', function(event) {
    console.log('animation started', event);
});

ctaButton.addEventListener('animationend', function(event) {
    console.log('animation end', event);
});

ctaButton.addEventListener('animationiteration', function(event) {
    console.log('animation iterations', event);
});