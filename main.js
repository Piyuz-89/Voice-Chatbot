const chatArea = document.querySelector(".chat-area");
let mic = document.getElementById("mic");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function firstBotMessage() {
    let firstMessage = "Hello! My name is Ako a chatbot, How can I help you?";
    document.getElementById("firstMessage").innerHTML = firstMessage;
}

firstBotMessage();


//TEJAS's PART



function getBotResponse(input) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Test Message";

    //rock paper scissors
    input = input.toLowerCase();
    if (input == "rock") {
        return "Paper";
    } else if (input == "paper") {
        return "Scissors";
    } else if (input == "scissors") {
        return "Rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello!!!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }


}

function showBotmsg(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p id="bot">' + botResponse + '</p>';
    $("#chat-area").append(botHtml);
    
    // $("#chat-area").stop().animate({ scrollTop: $("#chat-area")[0].scrollHeight}, 500);
    $('#chat-area').animate({
        scrollTop: $('#chat-area')[0].scrollHeight}, "slow");

    

}

//Gets the text text from the input box and processes it
function showUserResponsee(userText) {
    // let userText = $("#user-input").val();
    // console.log(userText);
    if (userText == "") {
        console.log("Empty input");
        return;
    }
    let userHtml = '<p id="user">' + userText + '</p>';


    $("#user-input").val("");
    $("#chat-area").append(userHtml);
    document.getElementById("user").scrollIntoView(true);
    setTimeout(() => {
        showBotmsg(userText);
    }, 500)

}

function getUser(){
    let userText = $("#user-input").val();
    console.log(userText);
    showUserResponsee(userText);
}

function sendButton() {
    getUser();
}

// Press enter to send a message
$("#user-input").keypress(function (e) {
    if (e.which == 13) {
        getUser();
    }
});

recognition.onresult=function(e){
    // console.log(e);
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    showUserResponsee(transcript);
    getBotResponse(transcript);
    console.log(transcript);
}

// recognition.onend=function(){
//     mic.style.color='#29A0E9';
// }

mic.addEventListener("click",function(){
    mic.style.color='#CB4335';
    recognition.start();
    console.log("Activated");
})

const setScrollPosition = () => {
    if (chatArea.scrollHeight > 0) {
        chatArea.scrollTop = chatArea.scrollHeight;
    }
};


