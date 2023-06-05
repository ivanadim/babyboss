
// card show btn 

let cards = document.querySelectorAll('.product-box');

[...cards].forEach((card) => {
    card.addEventListener('mouseover', function () {
        card.classList.add('is-hover');
    })
    card.addEventListener('mouseleave', function () {
        card.classList.remove('is-hover');
    })
})


document.getElementById('signup').addEventListener('click', function () {
    document.querySelector('.pinkbox').style.transform = 'translateX(80%)';
    document.querySelector('.signin').classList.add('nodisplay');
    document.querySelector('.signup').classList.remove('nodisplay');
});

document.getElementById('signin').addEventListener('click', function () {
    document.querySelector('.pinkbox').style.transform = 'translateX(0%)';
    document.querySelector('.signup').classList.add('nodisplay');
    document.querySelector('.signin').classList.remove('nodisplay');
});

const dropdownMenu = document.getElementById("dropdown-menuid")
dropdownMenu.addEventListener('click', (e) => {

    e.stopPropagation()
})




