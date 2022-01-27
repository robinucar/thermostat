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
});
