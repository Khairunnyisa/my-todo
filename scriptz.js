

// let text = document.getElementById('text');
let to1 = document.getElementById('to1');
// let to4 = document.getElementById('to4');
// let to5 = document.getElementById('to5');
let to2 = document.getElementById('to2');
// let to3 = document.getElementById('to3');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // text.style.marginTop = value * 2.5 + 'px';
    // to1.style.top = value * -1.5 + 'px';
    to1.style.bottom = value * 1 + 'px';
    // to5.style.left = value * 1.5 + 'px';
    // to4.style.left = value * -1.5 + 'px';
    to2.style.top = value * 1 + 'px';
});
