// Language: javascript
// Path: public/index.js
document.addEventListener("DOMContentLoaded", init);

const inputs = document.getElementsByClassName("color_value");
const inputs_array = Array.from(inputs);
const logo = document.getElementById("logo");
const splash = document.getElementById("splash");

function init() {
  inputs_array.forEach((input) => {
    input.addEventListener("keypress", act);
  });

  logo.addEventListener("click", () => {});
}

function act() {
  try {
    if (event.keyCode === 13) {
      update(this.value, this.id);
      this.placeholder = this.value;

      this.value = "";
    }
  } catch (error) {
    throw error;
  }
}

async function update(val, id) {
  try {
    const response = await fetch(
      `https://www.thecolorapi.com/id?${id}=${val}`,
      { method: "GET" }
    );
    const data = await response.json();
    // remove the # from the hex value
    const hex = data.hex.value.slice(1);
    const rgb = `${data.rgb.r}, ${data.rgb.g}, ${data.rgb.b}`;
    const hsl = `${data.hsl.h}, ${data.hsl.s}, ${data.hsl.l}`;

    return render(hex, rgb, hsl);
  } catch (Error) {
    throw Error;
  }
}

const render = (hex, rgb, hsl) => {
  const color_hex = document.getElementById("hex");
  const color_rgb = document.getElementById("rgb");
  const color_hsl = document.getElementById("hsl");
  color_hex.placeholder = hex;
  color_rgb.placeholder = rgb;
  color_hsl.placeholder = hsl;

  splash.style.backgroundColor = `#${hex}`;
};
