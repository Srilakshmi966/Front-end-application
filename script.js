

document.addEventListener("DOMContentLoaded", function() {
    const chatInput = document.querySelector("#chat-input");
    const chatOutput = document.querySelector("#chat-output");


const chatButton = document.getElementById("chat-button");
const chatContainer = document.getElementById("chat-container");
const closeChat = document.getElementById("close-chat");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");
const chatBox = document.getElementById("chat-box");


chatButton.addEventListener("click", toggleChat);


closeChat.addEventListener("click", closeChatWindow);


const responses = {
    "hi": "Hello, how can I help you?",
    "hello": "Hi there! How can I assist you?",
    "services": "We provide Web Development, AI Integration, and IT Support.",
    "bye": "Goodbye! Have a great day!",
    "contact": "You can reach us via the Contact page."
};


sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});


function toggleChat() {
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "block";
    } else {
        chatContainer.style.display = "none";
    }
}


function closeChatWindow() {
    chatContainer.style.display = "none";
}




function sendMessage() {
    let userText = userInput.value.toLowerCase().trim();
    if (userText === "") return;

   
    chatBox.innerHTML += `<p class="user-message"><strong>You:</strong> ${userText}</p>`;


    let botResponse = responses[userText] || "Sorry, I didn't understand that.";
    
    setTimeout(() => {
        chatBox.innerHTML += `<p class="bot-message"><strong>Bot:</strong> ${botResponse}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    userInput.value = "";
}
});
