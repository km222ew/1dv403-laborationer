"use strict";

var webDesktop = {

    init: function () {

        //Hämtar a-taggen i "knappen"
        var menuButton = document.getElementById("click");

        //Gör den till en "knapp"
        menuButton.onclick = function () {

            var desktop = document.getElementById("desktop");

            var imageFolder = document.createElement("div");
            imageFolder.id = "imgFolder";
            
            var top = document.createElement("div");
            top.id = "top";

            var topImage = document.createElement("img");
            topImage.className = "topImage";
            topImage.setAttribute("src", "pics/windowicon1.png");

            var topText = document.createElement("span");
            topText.id = "folderText";
            topText.appendChild(document.createTextNode("Image Viewer"));
            //desktop.appendChild(imageFolder);

            var topClose = document.createElement("a");
            topClose.className = "topClose";
            topClose.setAttribute("href", "#");

            var closeImg = document.createElement("img");
            closeImg.setAttribute("src", "pics/closewindow1.png");

            var picContainer = document.createElement("div");
            picContainer.id = "picContainer";

            var bottom = document.createElement("div");
            bottom.id = "bottom";

            var gif = document.createElement("img");
            gif.setAttribute("src", "pics/ajax-loader.gif");



            desktop.appendChild(imageFolder);
            imageFolder.appendChild(top);
            top.appendChild(topImage);
            top.appendChild(topText);
            top.appendChild(topClose);
            topClose.appendChild(closeImg);
            imageFolder.appendChild(picContainer);
            imageFolder.appendChild(bottom);
            bottom.appendChild(gif);

        };
    }
}

window.onload = webDesktop.init;