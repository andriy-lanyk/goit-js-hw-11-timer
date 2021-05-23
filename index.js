class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.element = this.getElement(selector);
        this.targetDate = targetDate;
        this.start();
    }

    getElement(id) {
        const ref = {
            daysTimer: document.querySelector(`${id} [data-value="days"]`),
            hoursTimer: document.querySelector(`${id} [data-value="hours"]`),
            minsTimer: document.querySelector(`${id} [data-value="mins"]`),
            secsTimer: document.querySelector(`${id} [data-value="secs"]`),
        };

        return ref;
    }

    setTime() {
        const addZero = function(number) { return number < 10 ? number = `0${number}` : number };
        
        const time = this.targetDate - new Date();
        const days = addZero(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = addZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = addZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = addZero(Math.floor((time % (1000 * 60)) / 1000));
        
        return {days, hours, mins, secs}
    }

    setTimerElements() {
        const time = this.setTime();
        this.element.daysTimer.textContent = `${time.days}`;
        this.element.hoursTimer.textContent = `${time.hours}`;
        this.element.minsTimer.textContent = `${time.mins}`;
        this.element.secsTimer.textContent = `${time.secs}`;
    }
    
    start() {
        const goTimer = setInterval(() => {
            this.setTimerElements()
        }, 1000);
    };
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 31, 2021'),
});