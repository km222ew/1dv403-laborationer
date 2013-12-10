"use strict";

var Memory = {

    pictureLocation: [],
    brickChoice: [],
    clickCount: 0,
    noOfTries: 0,
    victory: 0,
    rows: 4,
    cols: 4,

    init: function () {

        Memory.pictureLocation = RandomGenerator.getPictureArray(Memory.rows, Memory.cols);

        Memory.createTable(Memory.rows, Memory.cols);
        
    },

    createTable: function (rows, cols) {

        var memoryGame = document.getElementById("memoryTable");
        var table = document.createElement("table");
        var brickNumber = 0;

        memoryGame.appendChild(table);

        for (var row = 0; row < rows; row++) {

            var tr = document.createElement("tr");
            table.appendChild(tr);

            for (var col = 0; col < cols; col++) {

                var td = document.createElement("td");
                tr.appendChild(td);

                var a = document.createElement("a");
                a.href = "#";
                td.appendChild(a);

                var img = document.createElement("img");
                img.src = "pics/0.png";
                a.appendChild(img);

                Memory.turnBrick(brickNumber, a);

                brickNumber += 1;
            }
        }
    },

    turnBrick: function (brickNumber, id) {

        id.onclick = function () {

            var img = id.getElementsByTagName("img")[0];

            if (img.getAttribute("src") !== "pics/0.png") {

                return;

            }

            Memory.clickCount += 1;

            if (Memory.clickCount == 2 || Memory.clickCount == 1) {

                img.src = "pics/" + Memory.pictureLocation[brickNumber] + ".png";
                Memory.brickChoice.push(img)

            }
            else {

                return;

            }

            if (Memory.clickCount == 2) {

                Memory.noOfTries += 1;

                setTimeout(function () {

                    if (Memory.brickChoice[0].getAttribute("src") === Memory.brickChoice[1].getAttribute("src")) {

                        Memory.victory += 1;

                        if (Memory.victory == Memory.rows * Memory.cols / 2) {

                            alert("Grattis, du vann på " + Memory.noOfTries + " försök.");

                        }
                    }
                    else {

                        Memory.brickChoice[0].setAttribute("src", "pics/0.png");
                        Memory.brickChoice[1].setAttribute("src", "pics/0.png");
                    }

                    Memory.brickChoice = [];
                    Memory.clickCount = 0;

                }, 700);

                
            }
        };
        
    }

};

window.onload = Memory.init;