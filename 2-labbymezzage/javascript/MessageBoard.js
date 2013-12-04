"use strict";

var MessageEngine = {

    messages: [],

    init: function () {

        var messageButton = document.getElementById("submitMessage");
        var messageInput = document.getElementById("messageInput");

        messageButton.onclick = newMessage;
        
        function newMessage() {

            MessageEngine.messages.push(new Message(messageInput.value, new Date()));

            MessageEngine.renderMessages();
            messageInput.value = "";
        }
    },

    renderMessages: function () {

        //S�tter antal meddelanden
        var messageCounter = document.getElementById("messageCounter");
        messageCounter.innerHTML = "Antal Meddelanden: " + MessageEngine.messages.length;
        
        //T�mmer rutan p� meddelanden f�r att skriva ut de som finns i arrayen
        document.getElementById("userMessages").innerHTML = "";

        for (var i = 0; i < MessageEngine.messages.length; i++) {

            MessageEngine.renderMessage(i);
        }

        
    },

    renderMessage: function (messageID) {

        //H�mta meddelandet och l�gg det i en p-tagg
        var text = document.createElement("p"),

        //H�mta div d�r alla meddelanden samlas
        userMessages = document.getElementById("userMessages"),

        //Skapa en div d�r ett meddelande ska finnas
        aMessage = document.createElement("div");
        aMessage.className = "userMessage";
        text.innerHTML = MessageEngine.messages[messageID].getHTMLText();

        //S�tter tiden meddelandet var skapat i en footer
        var messageTime = document.createElement("footer");
        messageTime.innerHTML = MessageEngine.messages[messageID].getDateText().toLocaleTimeString();

        //L�gger till en knapp f�r att radera meddelande
        var messageRemove = document.createElement("a");
        messageRemove.className = "messageRemove";
        messageRemove.href = "#";

        messageRemove.onclick = function () {

            MessageEngine.removeMessage(messageID);
        };

        userMessages.appendChild(aMessage);
        aMessage.appendChild(messageRemove);
        aMessage.appendChild(text);
        aMessage.appendChild(messageTime);
        
    },

    removeMessage: function (messageID) {

        MessageEngine.messages.splice(messageID, 1);

        MessageEngine.renderMessages();
    }
};

window.onload = MessageEngine.init;