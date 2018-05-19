A Simple Javascript Timer

const timer = new Timer();

// Starts the Timer
timer.start();

// Pauses the Timer
timer.pause();

// Stops the timer
timer.stop();

{
    const timer = new Timer();
    timer.start(); 
    timer.start();
} - displays the message "timer is running"

{
    const timer = new Timer();
    timer.pause();
} - displays the message "timer has already been paused"

{
    const timer = new Timer();
    timer.stop();
} - displays the message "timer has already been stopped"

the Timer's accuracy will be + or - 3 milliseconds