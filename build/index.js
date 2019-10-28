"use strict";
exports.__esModule = true;
var Robot_1 = require("./Robot");
var Arena_1 = require("./Arena");
var readline = require('readline');
var InputValidators = {
    arena: /^\d*\s\d*/g,
    robotInitialPosition: /^\d*\s\d\s[NWES]/g,
    robotInstructions: /^[MLR]$|(^[MLR]+[MLR])/g
};
var InputQuestions = {
    arena: 'Please insert size of Arena (x y): ',
    robotInitialPosition: 'Insert Robot initial Position (x , y, D[N,S,E,W]): ',
    robotInstructions: 'Inseert Robot Movement instructions (sequence of [L,R,M] example: LMLMLMLMM): '
};
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function getInput(question, validator, delimeter, callback) {
    rl.question(question, function (answer) {
        answer = answer.trim();
        if (answer.match(validator) && answer.match(validator)[0].length == answer.length) {
            console.log(answer.match(validator));
            callback(answer.split(delimeter));
        }
        else {
            console.log("Invalid Input!");
            getInput(question, validator, delimeter, callback);
        }
    });
}
function createRobot(callback) {
    getInput(InputQuestions.robotInitialPosition, InputValidators.robotInitialPosition, " ", function (robotInput) {
        var robot = new Robot_1.Robot(Number(robotInput[0]), Number(robotInput[1]), robotInput[2]);
        getInput(InputQuestions.robotInstructions, InputValidators.robotInstructions, "", function (robotInstructions) {
            robot.setInstructions(robotInstructions);
            callback(robot);
        });
    });
}
;
getInput(InputQuestions.arena, InputValidators.arena, " ", function (arenaSize) {
    var arena = new Arena_1.Arena(Number(arenaSize[0]), Number(arenaSize[1]));
    createRobot(function (robotA) {
        createRobot(function (robotB) {
            robotA.setArena(arena);
            robotB.setArena(arena);
            robotA.move();
            robotB.move();
            console.log("** Results **");
            console.log("Robot A");
            robotA.printResults();
            console.log("Robot B");
            robotB.printResults();
            rl.close;
            process.exit();
        });
    });
});
