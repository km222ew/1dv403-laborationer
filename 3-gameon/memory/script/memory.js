var Memory = {

    pictureLocation: [],

    init: function () {

        var rows = 4,
            cols = 4;
        

        Memory.pictureLocation = RandomGenerator.getPictureArray(rows, cols);

        
        Memory.createTable(rows, cols);
        

        

    },

    createTable: function (rows, cols) {

        var memoryGame = document.getElementById("memoryTable");
        var table = document.createElement("table");

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

            }
        }
    }

};

window.onload = Memory.init;