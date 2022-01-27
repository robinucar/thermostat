class Thermostat {
  constructor() {
    this.temperature = 20;
  }
  getTemperature() {
    return this.temperature;
  }

  up() {
    this.temperature++;
  }

  down() {
    this.temperature--;
  }
}

module.exports = Thermostat;

const t = new Thermostat();
console.log(t);
t.up();
console.log(t)
t.down()
console.log(t);
