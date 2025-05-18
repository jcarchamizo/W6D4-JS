// Five Colors

let color = prompt("Choose a color: blue, green, red, yellow or purple").toLowerCase();

switch (color) {
  case "blue":
    alert("Blue is like the sea, as long as the sky is blue (and it's daytime)");
    break;
  case "green":
    alert("Green is life, like nature in spring");
    break;
  case "red":
    alert("Red is passion, energy and fire");
    break;
  case "yellow":
    alert("Yellow is joy, like the sun on a bright day");
    break;
  case "purple":
    alert("Violet is mystery, like a deep sunset");
    break;
  default:
    alert("You have not chosen any of the five proposed colors");
}