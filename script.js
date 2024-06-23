// function getRandomNumber() {
//     return Math.floor(Math.random() * 50) + 1;
// }

// function displayRandomNumber() {
//     const numberElement = document.getElementById('randomNumber');
//     numberElement.textContent = getRandomNumber();
// }

// let count = 0;
// const intervalId = setInterval(() => {
//     if (count < 20) {
//         displayRandomNumber();
//         count++;
//     } else {
//         clearInterval(intervalId);
//     }
// }, 5000);



// document.getElementById('startButton').addEventListener('click', function() {
//     updateNumbers();
// });

// function updateNumbers() {
//     const gridItems = document.querySelectorAll('.grid-item button');
//     gridItems.forEach(item => {
//         const randomNumber = Math.floor(Math.random() * 100) + 1;
//         item.textContent = randomNumber;
//     });
// }
// document.getElementById('startButton').addEventListener('click', function() {
//     updateGridNumbers();
//     setInterval(generateRandomNumber, 5000);
// });

// function updateGridNumbers() {
//     const gridItems = document.querySelectorAll('.grid-item button');
//     gridItems.forEach(item => {
//         const randomNumber = Math.floor(Math.random() * 100) + 1;
//         item.textContent = randomNumber;
//     });
// }

// function generateRandomNumber() {
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     document.getElementById('randomNumber').textContent = randomNumber;
// }
document.getElementById('startButton').addEventListener('click', function() {
    updateGridNumbers();
    setInterval(generateRandomNumber, 5000);
});

function updateGridNumbers() {
    const gridItems = document.querySelectorAll('.grid-item button');
    gridItems.forEach(item => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        item.textContent = randomNumber;
        item.addEventListener('click', toggleCross);
    });
}

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('randomNumber').textContent = randomNumber;
}

function toggleCross(event) {
    event.target.classList.toggle('crossed');
}








document.addEventListener('DOMContentLoaded', (event) => {
    // Select all buttons under the awards class
    const awardButtons = document.querySelectorAll('.awards .button-56');
    
    // Add event listener to each button
    awardButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Display a message with the text of the clicked button
            alert(`Hurrayyy!!! ${button.textContent} completed!!`);
        });
    });
});

