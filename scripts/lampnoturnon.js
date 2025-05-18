// Lamp Not Turn On

// Question 1: Is the lamp connected to the power? (yes/no)
let conexionCorriente = prompt("Is the lamp connected to the power? (yes/no)").toLowerCase();

if (conexionCorriente === "yes") {
  // Question 2: Is the light bulb burned out? (yes/no)
  let burnedoutLightbulb = prompt("Is the light bulb burned out? (yes/no)").toLowerCase();

  if (burnedoutLightbulb === "yes") {
    alert("Change the light bulb");
  } else if (burnedoutLightbulb === "no") {
    alert("Buy a new lamp");
  } else {
    alert("Invalid answer for light bulb");
  }

} else if (connectionCurrent === "no") {
  alert("Connect the lamp to the power supply");
} else {
  alert("Invalid response for connection");
}