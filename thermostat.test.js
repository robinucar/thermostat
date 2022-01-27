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
  
  // If power saving mode is on, the maximum temperature is 25 degrees
  it('temperature does not go above 25 degree if power saving is on', () => {
    const thermostat = new Thermostat()
    thermostat.temperature = 24
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(25)
})

 // If power saving mode is off, the maximum temperature is 32 degrees
 it('does not go above 32 degree if power saving mode is off', () => {
    const thermostat = new Thermostat()
    thermostat.setPowerSavingMode(false)
    thermostat.temperature = 31
    thermostat.up()
    thermostat.up()
    expect(thermostat.temperature).toEqual(32)
})

// You can reset the temperature to the default (20) reset method
it('resets the temperature to default', () => {
    const thermostat = new Thermostat()
    thermostat.temperature = 25
    thermostat.resetTemperature()
    expect(thermostat.temperature).toEqual(20)
  });

  // You can ask about the thermostat's current energy usage: 
  // 18 is low-usage, 
  it('shows energy usage', () => {
    const thermostat = new Thermostat()
    thermostat.temperature = 17
    expect(thermostat.getEnergyUsage()).toEqual('low')
  });
  
  // <= 25 is medium-usage, 
  it('shows energy usage', () => {
    const thermostat = new Thermostat()
    thermostat.temperature = 18
    expect(thermostat.getEnergyUsage()).toEqual('medium')
  });
  
  it('shows energy usage', () => {
    const thermostat = new Thermostat()
    thermostat.temperature = 25
    expect(thermostat.getEnergyUsage()).toEqual('medium')
  });
  
  // anything else is high-usage.
  it('shows energy usage', () => {
    const thermostat = new Thermostat()
    thermostat.temperature = 26
    expect(thermostat.getEnergyUsage()).toEqual('high')
  });
  
});
