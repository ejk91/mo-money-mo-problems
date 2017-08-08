/*
You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.
Write a class TempTracker with these methods:

insert()—records a new temperature
getMax()—returns the highest temp we've seen so far
getMin()—returns the lowest temp we've seen so far
getMean()—returns the mean ↴ of all temps we've seen so far
getMode()—returns a mode ↴ of all temps we've seen so far
Optimize for space and time. Favor speeding up the getter functions getMax(), getMin(), getMean(), and getMode() over speeding up the insert() function.

Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.
*/

class thermometer {
  constructor() {
    this.temps = {};
    this.totalTemps = 0;
    this.max = null;
    this.min = null;
    this.mean = 0; 
    this.mode = undefined;
    this.modeCount = this.temps[this.mode] || 0;
    this.count = 0;
  }

  insert(temp) {
    // if temp has not occured already
    if(!this.temps[temp]) {
      this.temps[temp] = 1;
    } else {
      this.temps[temp] += 1;
    }
    this.count += 1;

    // Max and Min
    if (!this.max) {
      this.max = temp;
    }
    if (!this.min) {
      this.min = temp;
    }

    this.max = Math.max(this.max, temp);
    this.min = Math.min(this.min, temp);

    // Mean
    this.totalTemps += temp;
    this.mean = (this.totalTemps / this.count);

    // Mode
    // we can do better than a for loop but ill start with a for in loop
    // for (let key in  this.temps) {
    //   if (this.temps[key] > this.mode)
    //   this.mode = key;
    // }

    if (this.temps[temp] > this.modeCount) {
      this.mode = temp;
    }
  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMean() {
    return this.mean;
  }

  getMode() {
    return this.mode;
  }
}


let foo = new thermometer();

foo.insert(10);
foo.insert(30);
foo.insert(10);
foo.insert(30);
foo.insert(30);

console.log(foo.getMax());
console.log(foo.getMin());
console.log(foo.getMean());
console.log(foo.getMode());









