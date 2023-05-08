"use strict"

class Timer {
    static hours = document.querySelector("#hours");
    static minutes = document.querySelector("#hours");
    static seconds = document.querySelector("#hours");

    static Run() {
        this.hours.style.animation = "clockHand 43200s infinite linear running";
        this.minutes.style.animation = "clockHand 3600s infinite linear running";
        this.seconds.style.animation = "clockHand 60s infinite linear running";
    }

    static Pause() {
        this.hours.style.animationPlayState = "paused";
        this.minutes.style.animationPlayState = "paused";
        this.seconds.style.animationPlayState = "paused";
    }

    static Reset() {
        this.hours.style.animation = "initial";
        this.minutes.style.animation = "initial";
        this.seconds.style.animation = "initial";
    }
}

let s = new Timer();

for (let i = 0, angle = 0; i < 60; i++, angle += 6) {
    let rim = document.querySelector("#rim");

    let stroke = document.createElement("div");
    stroke.className = "stroke";
    
    stroke.append(document.createElement("div"));
    stroke.append(document.createElement("div"));
    rim.append(stroke);
    stroke.style.transform = `translate(-50%, 0%) rotate(${angle}deg)`;
}