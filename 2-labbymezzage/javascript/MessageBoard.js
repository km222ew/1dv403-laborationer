"use strict";

var MessageEngine = {

    messages: [],

    init: function () {

        var messageButton = document.getElementById("submitMessage");
        var messageInput = document.getElementById("messageInput");

        messageInput.onkeypress = function (e) {
            if (!e) var e = window.event;

            if (e.keyCode == 13) {

                newMessage();
                e.preventDefault();
            }
        }

        messageButton.onclick = newMessage;
        
        function newMessage() {

            MessageEngine.messages.push(new Message(messageInput.value, new Date()));

            MessageEngine.renderMessages();
            messageInput.value = "";
        }
    },

    renderMessages: function () {

        //Sätter antal meddelanden
        var messageCounter = document.getElementById("messageCounter");
        messageCounter.innerHTML = "Antal Meddelanden: " + MessageEngine.messages.length;
        
        //Tömmer rutan på meddelanden för att skriva ut de som finns i arrayen
        document.getElementById("userMessages").innerHTML = "";

        for (var i = 0; i < MessageEngine.messages.length; i++) {

            MessageEngine.renderMessage(i);
        }

        
    },

    renderMessage: function (messageID) {

        //Hämta meddelandet och lägg det i en p-tagg
        var text = document.createElement("p"),

        //Hämta div där alla meddelanden samlas
        userMessages = document.getElementById("userMessages"),

        //Skapa en div där ett meddelande ska finnas
        aMessage = document.createElement("div");
        aMessage.className = "userMessage";
        text.innerHTML = MessageEngine.messages[messageID].getHTMLText();

        //Sätter tiden meddelandet var skapat i en footer
        var messageTime = document.createElement("footer");
        messageTime.innerHTML = MessageEngine.messages[messageID].getDate().toLocaleTimeString();

        //Lägger till en knapp för att radera meddelande
        var messageRemove = document.createElement("a");
        messageRemove.className = "messageRemove";
        messageRemove.href = "#";

        messageRemove.onclick = function () {

            MessageEngine.removeMessage(messageID);
        };

        //Lägger till knapp för att se tiden
        var messageDateTime = document.createElement("a");
        messageDateTime.className = "messageTime";
        messageDateTime.href = "#";

        messageDateTime.onclick = function () {

            alert(MessageEngine.messages[messageID].getDateText().toLocaleString());

        };

        userMessages.appendChild(aMessage);
        aMessage.appendChild(messageRemove);
        aMessage.appendChild(messageDateTime);
        aMessage.appendChild(text);
        aMessage.appendChild(messageTime);
        
    },

    removeMessage: function (messageID) {

        MessageEngine.messages.splice(messageID, 1);

        MessageEngine.renderMessages();
    }
};

window.onload = MessageEngine.init;