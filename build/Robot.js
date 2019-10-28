"use strict";
exports.__esModule = true;
var _ = require("lodash");
var Robot = /** @class */ (function () {
    function Robot(initX, initY, initD) {
        this.directionMapping = {
            N: 0,
            E: 90,
            S: 180,
            W: 270
        };
        this.position = { x: initX, y: initY, d: initD };
    }
    Robot.prototype.getPosition = function () {
        return this.position;
    };
    Robot.prototype.setInstructions = function (instructions) {
        this.instructions = instructions;
    };
    Robot.prototype.getInstructions = function () {
        return this.instructions;
    };
    Robot.prototype.setArena = function (arena) {
        this.arena = arena;
    };
    Robot.prototype.getArena = function () {
        return this.arena;
    };
    Robot.prototype.move = function () {
        this.instructions.forEach(this.calculateInstructionStep.bind(this));
    };
    Robot.prototype.printResults = function () {
        if (this.arena.isWreked(this.position)) {
            console.log(this.position.x, this.position.y, this.position.d, 'Wreked');
        }
        else {
            console.log(this.position.x, this.position.y, this.position.d);
        }
    };
    Robot.prototype.calculateInstructionStep = function (step) {
        //console.log("Step:", step);
        //console.log("Before:", this.position);
        if (step === "M") {
            this.moveStep();
        }
        else {
            this.position.d = this.rotate(step);
        }
        //console.log("After:", this.position);
    };
    Robot.prototype.moveStep = function () {
        switch (this.position.d) {
            case 'N':
                this.position.y = this.position.y + 1;
                break;
            case 'S':
                this.position.y = this.position.y - 1;
                break;
            case 'E':
                this.position.x = this.position.x + 1;
                break;
            case 'W':
                this.position.x = this.position.x - 1;
                break;
        }
    };
    Robot.prototype.rotate = function (direction) {
        var newDirection = this.directionMapping[this.position.d];
        if (direction === 'L') {
            newDirection = newDirection == 0 ? 360 : newDirection;
            newDirection = newDirection - 90;
        }
        else if (direction === 'R') {
            newDirection = newDirection + 90;
            newDirection = newDirection == 360 ? 0 : newDirection;
        }
        return _.invert(this.directionMapping)[newDirection];
    };
    return Robot;
}());
exports.Robot = Robot;
