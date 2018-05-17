
export class Timer {

    private time: number = 0;
    private startTime: number = 0;
    private endTime: number = 0;

    private isStarted: boolean = false;
    private isPaused: boolean = false;
    private isStopped: boolean = false;

    private backlogTime: number = 0;

    public start() {
        if (this.isPaused || this.isStopped || !this.isStarted) {
            this.isStarted = true;
            this.startTime = new Date().getTime();
        } else {
            console.log('timer is already running');
        }
    }

    public pause() {
        if (this.isStarted) {
            this.endTime = new Date().getTime();
            this.backlogTime += this.endTime - this.startTime;
            this.time += this.backlogTime;
            this.startTime = this.endTime = 0;
            this.isStarted = false;
            this.isPaused = true;
            this.isStopped = false;
        } else {
            console.log('timer is  paused');
        }
    }

    public stop() {
        if (this.isStarted) {
            this.endTime = new Date().getTime();
            this.time = this.endTime - this.startTime;
            this.time += this.backlogTime;
            this.startTime = this.endTime = 0;
            this.isStarted = false;
            this.isPaused = false;
            this.isStopped = true;
        } else {
            console.log('timer is already stopped');
        }
    }

    public reset() {
        this.time = this.startTime = this.endTime = this.backlogTime = 0;
        this.isStarted = this.isPaused = this.isStopped = false;
    }

    private getHours() {
        return Math.floor((this.time / 1000) / 3600);
    }

    private getMinutes() {
        return Math.floor((this.time / 1000) / 60);
    }

    private getSeconds() {
        return Math.floor(this.time / 1000);
    }

    private getMilliSeconds() {
        return this.time % 1000;
    }

    public getTime() {
        if (!this.endTime) {
            this.stop();
        }
        return `${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}:${this.getMilliSeconds()}`;
    }

    public getTimeObject() {
        return {
            'hours': this.getHours(),
            'minutes': this.getMinutes(),
            'seconds': this.getSeconds(),
            'milliseconds': this.getMilliSeconds()
        };
    }

}

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