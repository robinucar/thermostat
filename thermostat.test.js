const Thermostat = require("./thermostat");
describe("Thermostat", () => {
  // The Thermostat starts with an initial temperature of 20 degrees
  it("has a default temperature of 20", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  // You can increase the temperature with an up method
  it('increases temperature by 1', () => {
    const thermostat = new Thermostat();
    // increase temprature
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(21)
  })

   // You can decrease the temperature with a down method
   it('decreases temp by 1', () => {
    const thermostat = new Thermostat();
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(19)
  });

    // The minimum possible temperature is 10 degrees
  it('does not go below 10', () => {
    const thermostat = new Thermostat()
    thermostat.temperature = 11
    thermostat.down()
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(10)
  })

  // The Power saving mode is on by default but it can also be turned off
  it('power saving mode is on by default', () => {
    const thermostat = new Thermostat()
    expect(thermostat.powerSaverMode).toEqual(true)
  });

  it('can be turned off', () => { 
    const thermostat = new Thermostat()
    thermostat.setPowerSavingMode(false)
    expect(thermostat.powerSaverMode).toEqual(false)
  })
  
  
});
