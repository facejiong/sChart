import test from "ava";
import { Color } from "../../src/plugins/Color";

test("hexColor", (t) => {
  // 断言
  const hexColor = new Color("#c7254e");
  t.is(hexColor.getHex(), "#c7254e");
  t.is(hexColor.getRgbString(), "rgb(199,37,78)");
  t.is(hexColor.getHslString(), "hsl(344.81,68.64%,46.27%)");
});

test("rgbColor", (t) => {
  // 断言
  const rgbColor = new Color("rgb(34, 50, 115)");
  t.is(rgbColor.getHex(), "#223273");
  t.is(rgbColor.getRgbString(), "rgba(34,50,115,1)");
  t.is(rgbColor.getHslString(), "hsl(228.15,54.36%,29.22%)");
});

test("hslColor", (t) => {
  // 断言
  const hexColor = new Color("hsl(298.6, 55%, 29.6%)");
  t.is(hexColor.getHex(), "#732275");
  t.is(hexColor.getRgbString(), "rgb(115.06,33.97,116.99)");
  t.is(hexColor.getHslString(), "hsla(298.6,55%,29.6%,1)");
});
