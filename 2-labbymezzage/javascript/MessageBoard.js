"use strict";

var MessageEngine = {

    messages: [],

    init: function () {
        

        var mess = new Message("Testmeddelande", new Date());
        alert(mess);
        alert(mess.getText());
        mess.setText("En annan text");
        alert(mess);

        var test1 = new Message("Test 1", new Date());
        var test2 = new Message("Test 2", new Date());
        

        MessageEngine.messages.push(test1, test2);

        alert(MessageEngine.messages[0]);
        alert(MessageEngine.messages[1].getText());
        
    }

};

window.onload = MessageEngine.init;