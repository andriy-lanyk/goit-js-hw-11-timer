class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.createHTML();
        this.element = this.getElement(selector);
        this.start();
    }
    
    createHTML() {
        const year = this.selector.slice(this.selector.length-1)
    const timerHTML =
        `<h1 id="headline">Countdown to my birthday on 202${year} year:</h1>
        
        <div class="timer" id="${this.selector.slice(1)}">
      <div class="field">
        <span class="value" data-value="days">00</span>
        <span class="label">Days</span>
      </div>
      
      <div class="field">
        <span class="value" data-value="hours">00</span>
        <span class="label">Hours</span>
      </div>
      
      <div class="field">
        <span class="value" data-value="mins">00</span>
        <span class="label">Minutes</span>
      </div>
      
      <div class="field">
        <span class="value" data-value="secs">00</span>
        <span class="label">Seconds</span>
      </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', timerHTML);
};

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

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Oct 31, 2022'),
});