"use strict";

var messageEngine = {

    init: function () {
        var mess = new Message("Testmeddelande", new Date());
        alert(mess);
        alert(mess.getText());
        mess.setText("En annan text");
        alert(mess);
    }

};

window.onload = messageEngine.init;