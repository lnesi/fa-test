"use strict";
exports.__esModule = true;
var Arena = /** @class */ (function () {
    function Arena(width, height) {
        this.x1 = 0;
        this.x2 = 0;
        this.y1 = 0;
        this.y2 = 0;
        this.x2 = width;
        this.y2 = height;
    }
    Arena.prototype.isWreked = function (robotP) {
        if (robotP.x <= this.x1) {
            return true;
        }
        else if (robotP.x >= this.x2) {
            return true;
        }
        else if (robotP.y <= this.y1) {
            return true;
        }
        else if (robotP.y >= this.y2) {
            return true;
        }
        else {
            return false;
        }
    };
    return Arena;
}());
exports.Arena = Arena;
