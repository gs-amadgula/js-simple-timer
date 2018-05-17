"use strict";
exports.__esModule = true;
var simple_timer_1 = require("./simple-timer");
function positiveTestCase() {
    var timer = new simple_timer_1.Timer();
    var start = setTimeout(function () {
        timer.start();
    }, 1000);
    var pause = setTimeout(function () {
        timer.pause();
    }, 3000);
    var restart = setTimeout(function () {
        timer.start();
    }, 5000);
    var stop = setTimeout(function () {
        timer.stop();
    }, 7000);
    setTimeout(function () {
        console.log(timer.getTime());
        clearTimeout(start);
        clearTimeout(stop);
        clearTimeout(pause);
        clearTimeout(restart);
        console.log(timer.getTimeObject());
    }, 8000);
}
function negativeTestCase() {
    var timer = new simple_timer_1.Timer();
    var start = setTimeout(function () {
        timer.stop();
    }, 1000);
    var pause = setTimeout(function () {
        timer.pause();
    }, 3000);
    var restart = setTimeout(function () {
        timer.pause();
    }, 5000);
    var stop = setTimeout(function () {
        timer.stop();
    }, 7000);
    setTimeout(function () {
        console.log(timer.getTime());
        clearTimeout(start);
        clearTimeout(stop);
        clearTimeout(pause);
        clearTimeout(restart);
        console.log(timer.getTimeObject());
    }, 8000);
}
function semiPositive() {
    var timer = new simple_timer_1.Timer();
    var start = setTimeout(function () {
        timer.pause();
    }, 1000);
    var pause = setTimeout(function () {
        timer.start();
    }, 3000);
    var restart = setTimeout(function () {
        timer.stop();
    }, 5000);
    var stop = setTimeout(function () {
        timer.pause();
    }, 7000);
    setTimeout(function () {
        console.log(timer.getTime());
        clearTimeout(start);
        clearTimeout(stop);
        clearTimeout(pause);
        clearTimeout(restart);
        console.log(timer.getTimeObject());
    }, 8000);
}
positiveTestCase();
negativeTestCase();
semiPositive();
