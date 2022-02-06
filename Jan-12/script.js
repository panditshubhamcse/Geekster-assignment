let like = document.querySelector('#like');
let dislike = document.querySelector('#dislike');

let value = document.querySelector('#counter');

let counter = 0;

like.addEventListener('click', function() {
    counter = counter + 1;
    value.innerHTML = counter;
})



dislike.addEventListener('click', function() {
    counter = counter - 1;
    value.innerHTML = counter;
})