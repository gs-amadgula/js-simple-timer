"use strict";
exports.__esModule = true;
var Timer = /** @class */ (function () {
    function Timer() {
        this.time = 0;
        this.startTime = 0;
        this.endTime = 0;
        this.isStarted = false;
        this.isPaused = false;
        this.isStopped = false;
        this.backlogTime = 0;
    }
    Timer.prototype.start = function () {
        if (this.isPaused || this.isStopped || !this.isStarted) {
            this.isStarted = true;
            this.startTime = new Date().getTime();
        }
        else {
            console.log('timer is already running');
        }
    };
    Timer.prototype.pause = function () {
        if (this.isStarted) {
            this.endTime = new Date().getTime();
            this.backlogTime += this.endTime - this.startTime;
            this.time += this.backlogTime;
            this.startTime = this.endTime = 0;
            this.isStarted = false;
            this.isPaused = true;
            this.isStopped = false;
        }
        else {
            console.log('timer is already paused');
        }
    };
    Timer.prototype.stop = function () {
        if (this.isStarted) {
            this.endTime = new Date().getTime();
            this.time = this.endTime - this.startTime;
            this.time += this.backlogTime;
            this.startTime = this.endTime = 0;
            this.isStarted = false;
            this.isPaused = false;
            this.isStopped = true;
        }
        else {
            console.log('timer is already stopped');
        }
    };
    Timer.prototype.reset = function () {
        this.time = this.startTime = this.endTime = this.backlogTime = 0;
        this.isStarted = this.isPaused = this.isStopped = false;
    };
    Timer.prototype.getHours = function () {
        return Math.floor((this.time / 1000) / 3600);
    };
    Timer.prototype.getMinutes = function () {
        return Math.floor((this.time / 1000) / 60);
    };
    Timer.prototype.getSeconds = function () {
        return Math.floor(this.time / 1000);
    };
    Timer.prototype.getMilliSeconds = function () {
        return this.time % 1000;
    };
    Timer.prototype.getTime = function () {
        if (!this.endTime) {
            this.stop();
        }
        return this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds() + ":" + this.getMilliSeconds();
    };
    Timer.prototype.getTimeObject = function () {
        return {
            'hours': this.getHours(),
            'minutes': this.getMinutes(),
            'seconds': this.getSeconds(),
            'milliseconds': this.getMilliSeconds()
        };
    };
    return Timer;
}());
exports.Timer = Timer;
