"use strict"

class Timer {
    static Run() {
        hours.style.animation = "clockHand 43200s infinite linear running";
        minutes.style.animation = "clockHand 3600s infinite linear running";
        seconds.style.animation = "clockHand 60s infinite linear running";
    }

    static Pause() {
        hours.style.animationPlayState = "paused";
        minutes.style.animationPlayState = "paused";
        seconds.style.animationPlayState = "paused";
    }

    static Reset() {
        hours.style.animation = "initial";
        minutes.style.animation = "initial";
        seconds.style.animation = "initial";
    }
}

for (let i = 0, angle = 0; i < 60; i++, angle += 6) {
    let stroke = document.createElement("div");
    stroke.className = "stroke";
    
    stroke.append(document.createElement("div"));
    stroke.append(document.createElement("div"));
    rim.append(stroke);
    
    stroke.style.transform = `translate(-50%, 0%) rotate(${angle}deg)`;
}