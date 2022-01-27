class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaverMode = true
  }
  getTemperature() {
    return this.temperature;
  }

  up() {
    this.temperature++;
  }

  down() {
    if (this.temperature > 10) {
        this.temperature --;
     }
  }
}

module.exports = Thermostat;

const t = new Thermostat();
console.log(t);
t.up();
console.log(t)
t.down()
console.log(t);
