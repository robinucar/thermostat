describe('Thermostat', () => {
  
    // The Thermostat starts with an initial temperature of 20 degrees
    it('has a default temperature of 20', () => {
      const thermostat = new Thermostat();
      expect(thermostat.getTemperature()).toEqual(20);
    });
})