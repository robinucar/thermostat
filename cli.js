const Thermostat = require("./thermostat");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const setUpTemperature = (thermostat) => {
  rl.question(
    "Please Enter a command to decrease or increase or exit the temperature from ",
    (answer) => {
      switch (answer) {
        case "up":
          thermostat.up();

          break;

        case "down":
          thermostat.down();

          break;
        case "exit":
          return rl.close();
        default:
          console.log("Wrong command!");
      }

      setUpTemperature(thermostat);
    }
  );
  console.log(thermostat.getTemperature());
};

setUpTemperature((thermostat = new Thermostat()));
