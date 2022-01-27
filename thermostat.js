class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaverMode = true
  }
  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSaverMode === true && this.temperature < 25) {
        this.temperature ++;
    }
  }

  down() {
    if (this.temperature > 10) {
        this.temperature --;
     }
  }

  setPowerSavingMode(value) {
   this.powerSaverMode = value
  }
}

module.exports = Thermostat;

const t = new Thermostat();
console.log(t);
t.up();
console.log(t)
t.down()
console.log(t);
