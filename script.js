document.addEventListener('DOMContentLoaded', function() {
    const nameModal = document.getElementById('nameModal');
    nameModal.style.display = "block";
});

let valentineName = "Nono"; // Default name

function getNameAndProceed() {
    const nameInput = document.getElementById('nameInput');
    const valentineQuestionElement = document.getElementById('valentineQuestion');
    const nameModal = document.getElementById('nameModal');
    valentineName = nameInput.value.trim();
    if (!valentineName) {
        valentineName = "Nono"; // Keep default if nothing entered
    }
    valentineQuestionElement.textContent = `${valentineName}, Will you be my Valentine❤️?`;
    // Update messages array with the actual valentineName
    messages = [
        `I knew you'd tap No, ${valentineName} !`,
        "Again ???",
        `I Meow you, ${valentineName}...`,
        "Stop, Just say Yes",
        `Let me be your Valentine, ${valentineName}`,
        `${valentineName} I love you >3`,
        "Ok fine, tap No Again ;)...",
        "Just kidding, say yes please! ❤️",
        "Your trapped until you say yes!!"
    ];
    nameModal.style.display = "none";
}

function cancelNameInput() {
    const valentineQuestionElement = document.getElementById('valentineQuestion');
    const nameModal = document.getElementById('nameModal');
    valentineQuestionElement.textContent = `Nono, Will you be my Valentine❤️?`; // Use default name
    messages = [
        `I knew you'd tap No, Nono !`,
        "Again ???",
        `I Meow you, Nono...`,
        "Stop, Just say Yes",
        `Let me be your Valentine, Nono`,
        `Nono I love you >3`,
        "Ok fine, tap No Again ;)...",
        "Just kidding, say yes please! ❤️",
        "Your trapped until you say yes!!"
    ];
    nameModal.style.display = "none";
}

const messages = [
    `I knew you'd tap No, Nono !`,
    "Again ???",
    `I Meow you, Nono...`,
    "Stop, Just say Yes",
    `Let me be your Valentine, Nono`,
    `Nono I love you >3`,
    "Ok fine, tap No Again ;)...",
    "Just kidding, say yes please! ❤️",
    "Your trapped until you say yes!!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const messageContainer = document.querySelector('.no-message-container');
    const currentMessage = messages[messageIndex];

    messageContainer.textContent = currentMessage;
    messageIndex = (messageIndex + 1) % messages.length;

    const yesButton = document.querySelector('.yes-button');
    const currentYesSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentYesSize * 1.5}px`;


    if (currentMessage === "Your trapped until you say yes!!") {
        noButton.remove();
    }
}

function handleYesClick() {
    localStorage.setItem('valentineName', valentineName);
    window.location.href = "yes_page.html";
}
