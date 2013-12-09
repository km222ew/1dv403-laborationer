var Memory = {

    brickLocation: [],

    init: function () {

        var rows = 4,
            cols = 4;

        Memory.brickLocation = RandomGenerator.getPictureArray(rows, cols);

        console.log(Memory.brickLocation);

    }

};

window.onload = Memory.init;