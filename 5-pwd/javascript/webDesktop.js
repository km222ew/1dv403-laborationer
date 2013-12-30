"use strict";

var webDesktop = {

    init: function () {

        //H�mtar a-taggen i "knappen"
        var menuButton = document.getElementById("click");

        var resetButton = document.getElementById("reset");
        var buttonUrl = "css/background/random_grey_variations_@2X.png";
        
        webDesktop.changeBackground(buttonUrl, resetButton);

        //G�r den till en "knapp"
        menuButton.onclick = function () {

            var desktop = document.getElementById("desktop");

            //Kollar om ett f�nster finns. Hindrar att fler skapas.
            if (desktop.firstElementChild) {

                return false;
            }

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

            var topClose = document.createElement("a");
            topClose.className = "topClose";
            topClose.setAttribute("href", "#");

            //St�ng-knappen f�r f�nstret
            topClose.onclick = function () {

                desktop.removeChild(imageFolder);
            }

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

            var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";

            new AjaxCon(url, function (data) {

                //Tar bort laddnings-gif n�r anropet �r f�rdigt.
                bottom.removeChild(gif);

                var images = JSON.parse(data);
                //Funktionen kollar vilket tummnagel som �r st�rst
                var imgSize = webDesktop.imageSize(images);

                //K�r igenom alla objekt i JSON och skapar en plats f�r varje bild i rutan
                for (var i = 0; i < images.length; i++) {

                    var imageContainer = document.createElement("figure");

                    var imageClick = document.createElement("a");
                    imageClick.setAttribute("href", "#");

                    //Ger a-taggen f�rm�gan att byta bakgrunds-bild p� rutan
                    webDesktop.changeBackground(images[i].URL, imageClick);

                    var image = document.createElement("img");
                    image.setAttribute("src", images[i].thumbURL);

                    imageContainer.style.height = imgSize.height + "px";
                    imageContainer.style.width = imgSize.width + "px";

                    picContainer.appendChild(imageContainer);
                    imageContainer.appendChild(imageClick);
                    imageClick.appendChild(image);


                }
            });
        };
    },

    changeBackground: function (image, ID) {
    
        ID.onclick = function () {

            document.getElementById("desktop").style.backgroundImage = "url('" + image + "')";

        };
    },

    imageSize: function (images) {

        var height = 0;
        var width = 0;
        
        for (var x in images) {
           
            if (images[x].thumbHeight > height) {

                height = images[x].thumbHeight;
            }
            if (images[x].thumbWidth > width) {

                width = images[x].thumbWidth;
            }
        }
        return {
            
            height: height,
            width: width
        }
    }   
}

window.onload = webDesktop.init;