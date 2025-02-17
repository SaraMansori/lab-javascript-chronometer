class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback) {
      this.intervalId = setInterval(() => {
        callback;
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 10);
    }
  }

  getMinutes() {
    return parseInt(this.currentTime / 100 / 60);
  }

  getSeconds() {
    if (this.currentTime != 0) {
      return parseInt((this.currentTime / 100) % 60);
    } else {
      return 0;
    }
  }

  getMiliseconds() {
    if (this.currentTime != 0) {
      return (this.currentTime % 100).toString();
    } else {
      return 0;
    }
  }

  computeTwoDigitNumber(value) {
    let string = value.toString();
    if (string.length < 2) {
      return `0${string}`;
    } else {
      return string;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const miliseconds = this.computeTwoDigitNumber(this.getMiliseconds());
    return `${minutes}:${seconds}:${miliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
