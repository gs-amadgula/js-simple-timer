import { Timer } from "./simple-timer";

function positiveTestCase() {
    const timer = new Timer();

    const start = setTimeout(function () {
        timer.start();
    }, 1000);

    const pause = setTimeout(function () {
        timer.pause();
    }, 3000);

    const restart = setTimeout(function () {
        timer.start();
    }, 5000);

    const stop = setTimeout(function () {
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
    const timer = new Timer();

    const start = setTimeout(function () {
        timer.stop();
    }, 1000);

    const pause = setTimeout(function () {
        timer.pause();
    }, 3000);

    const restart = setTimeout(function () {
        timer.pause();
    }, 5000);

    const stop = setTimeout(function () {
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
    const timer = new Timer();

    const start = setTimeout(function () {
        timer.pause();
    }, 1000);

    const pause = setTimeout(function () {
        timer.start();
    }, 3000);

    const restart = setTimeout(function () {
        timer.stop();
    }, 5000);

    const stop = setTimeout(function () {
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