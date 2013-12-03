"use strict";

var MessageEngine = {

    messages: [],

    init: function () {

        var messageButton = document.getElementById("submitMessage");
        var messageInput = document.getElementById("messageInput");

        messageButton.onclick = newMessage;
        
        function newMessage() {

            MessageEngine.messages.push(new Message(messageInput.value, new Date()));

            messageInput.value = "";

            console.log(MessageEngine.messages[0].toString());
        }

        
    }


};

window.onload = MessageEngine.init;