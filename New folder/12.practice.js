function updateButton() {
    
    let button = document.querySelector('.start-button');
    button.innerHTML = 'Loading...';

    const intervalId= setInterval(function() {
    button.innerHTML = 'Finished!';
    }, 1000);
}

const buttonElement = document.querySelector('.start-button');
buttonElement.addEventListener('click', () => {updateButton()});


function updateCartButton() {
    const para = document.querySelector('.added');
    para.innerHTML = 'Added!';

    setTimeout(function() {
        para.innerHTML = '';
    }, 1000);
}

setInterval(function () {
    if (document.title === '12-Practice') {
        document.title = '(2) New messages';
    }
    else {
        document.title = 'App'
    }
}, 1000);

//  document.addEventListener('DOMContentLoaded', () => {
//         const button = document.getElementById('start-button'); // Assuming your button has an ID 'myButton'
//         if (button) { // It's good practice to check if the element exists
//             button.addEventListener('click', () => {updateButton()});
//         } else {
//             console.error("Button element not found!");
//         }
//     });

