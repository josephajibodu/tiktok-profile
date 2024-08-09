// get the body element
let bodyElement = document.querySelector('body');

// get the edit profile button
let editBtn = document.querySelector('#edit-btn')

const colors = ['green', 'gray', 'beige', 'red', 'blue', 'purple']

// when the button is clicked, do something
editBtn.addEventListener('click', function() {
    // generate a random number from 0 - 5
    let index = Math.floor(Math.random() * 6);

    bodyElement.style.backgroundColor = colors[index];
})

