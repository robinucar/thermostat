class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaverMode = true;
  }
  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSaverMode === true && this.temperature < 25) {
      this.temperature++;
    } else if (this.powerSaverMode === false && this.temperature < 32) {
      this.temperature++;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature--;
    }
  }

  setPowerSavingMode(value) {
    this.powerSaverMode = value;
  }

  resetTemperature() {
    this.temperature = 20;
  }

  getEnergyUsage() {
    if (this.temperature < 18) {
      return "low";
    } else if (this.temperature >= 18 && this.temperature <= 25) {
      return "medium";
    } else {
      return "high";
    }
  }
}

module.exports = Thermostat;

// const t = new Thermostat()
// t.up()
// t.up()

// console.log(t.getTemperature())