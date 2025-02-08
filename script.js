
// Simple response system
document.addEventListener("DOMContentLoaded", function() {
    const chatInput = document.querySelector("#chat-input");
    const chatOutput = document.querySelector("#chat-output");

// Get elements
const chatButton = document.getElementById("chat-button");
const chatContainer = document.getElementById("chat-container");
const closeChat = document.getElementById("close-chat");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");
const chatBox = document.getElementById("chat-box");

// Toggle Chat Window
chatButton.addEventListener("click", toggleChat);

// Close Chat Window
closeChat.addEventListener("click", closeChatWindow);

// Scripted Responses
const responses = {
    "hi": "Hello, how can I help you?",
    "hello": "Hi there! How can I assist you?",
    "services": "We provide Web Development, AI Integration, and IT Support.",
    "bye": "Goodbye! Have a great day!",
    "contact": "You can reach us via the Contact page."
};

// Handle User Input
sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Toggle Chatbox
function toggleChat() {
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "block";
    } else {
        chatContainer.style.display = "none";
    }
}

// Close Chat Window
function closeChatWindow() {
    chatContainer.style.display = "none";
}



// Function to Send Message
function sendMessage() {
    let userText = userInput.value.toLowerCase().trim();
    if (userText === "") return;

    // Add User Message
    chatBox.innerHTML += `<p class="user-message"><strong>You:</strong> ${userText}</p>`;

    // Get Response or Default Message
    let botResponse = responses[userText] || "Sorry, I didn't understand that.";
    
    setTimeout(() => {
        chatBox.innerHTML += `<p class="bot-message"><strong>Bot:</strong> ${botResponse}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    userInput.value = "";
}
});