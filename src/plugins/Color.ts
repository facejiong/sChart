export class Color {
  private hex: string;
  private rgb: number[];
  private hsl: number[];
  constructor(color: string) {
    this.setColor(color);
  }
  public setColor(color: string) {
    if (color.indexOf("#") === 0) {
      this.hex = color;
      this.rgb = this.hexToRgb(color);
      this.hsl = this.rgbToHsl(this.rgb);
    } else if (color.indexOf("rgb") === 0) {
      this.rgb = this.rgbStringToArray(color);
      this.hex = this.rgbToHex(this.rgb);
      this.hsl = this.rgbToHsl(this.rgb);
    } else if (color.indexOf("hsl") === 0) {
      this.hsl = this.hslStringToArray(color);
      this.rgb = this.hslToRgb(this.hsl);
      this.hex = this.rgbToHex(this.rgb);
    }
  }
  public getHex(): string {
    return this.hex;
  }
  public getRgb(): number[] {
    return this.rgb;
  }
  public getRgbString(): string {
    const {rgb} = this;
    return rgb.length === 3 ? `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` : `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${rgb[3]})`;
  }
  public getHsl(): number[] {
    return this.hsl;
  }
  public getHslString(): string {
    const {hsl} = this;
    // tslint:disable-next-line:max-line-length
    return hsl.length === 3 ? `hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)` : `hsla(${hsl[0]},${hsl[1]}%,${hsl[2]}%,${hsl[3]})`;
  }
  public rgbStringToArray(str: string): number[] {
    if (!str) {
      return null;
    }
    // tslint:disable-next-line:max-line-length
    const rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
    const match = str.match(rgba);
    const rgb = [0, 0, 0, 1];
    if (match) {
      for (let i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i + 1], 0);
      }

      if (match[4]) {
        rgb[3] = parseFloat(match[4]);
      }
      for (let i = 0; i < 3; i++) {
        rgb[i] = this.clamp(rgb[i], 0, 255);
      }
      rgb[3] = this.clamp(rgb[3], 0, 1);
      return rgb;
    }

    return null;
  }
  public hslStringToArray(str: string): number[] {
    if (!str) {
      return null;
    }
    // tslint:disable-next-line:max-line-length
    const hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
    const match = str.match(hsl);

    if (match) {
      const alpha = parseFloat(match[4]);
      const h = ((parseFloat(match[1]) % 360) + 360) % 360;
      const s = this.clamp(parseFloat(match[2]), 0, 100);
      const l = this.clamp(parseFloat(match[3]), 0, 100);
      const a = this.clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

      return [h, s, l, a];
    }

    return null;
  }
  public rgbToHex(args: number[]): string {
    const integer = ((Math.round(args[0]) & 0xFF) << 16)
      + ((Math.round(args[1]) & 0xFF) << 8)
      + (Math.round(args[2]) & 0xFF);

    const str = integer.toString(16).toUpperCase();
    return "#" + "000000".substring(str.length) + str;
  }
  public hexToRgb(args): number[] {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }

    let colorString = match[0];

    if (match[0].length === 3) {
      colorString = colorString.split("").map((char) => {
        return char + char;
      }).join("");
    }

    const integer = parseInt(colorString, 16);
    const r = (integer >> 16) & 0xFF;
    const g = (integer >> 8) & 0xFF;
    const b = integer & 0xFF;

    return [r, g, b];
  }
  public rgbToHsl(rgb: number[]): number[] {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    let l;

    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }

    h = Math.min(h * 60, 360);

    if (h < 0) {
      h += 360;
    }

    l = (min + max) / 2;

    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }

    return [parseFloat(h.toFixed(2)), parseFloat((s * 100).toFixed(2)), parseFloat((l * 100).toFixed(2))];
  }
  public hslToRgb(hsl: number[]): number[] {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t1;
    let t2;
    let t3;
    let rgb;
    let val;

    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }

    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }

    t1 = 2 * l - t2;

    rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }

      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }

      rgb[i] = parseFloat((val * 255).toFixed(2));
    }

    return rgb;
  }
  public isDark(): boolean {
    const rgb = this.rgb;
    const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return yiq < 128;
  }

  public isLight(): boolean {
    return !this.isDark();
  }
  public lighten(ratio: number) {
    const hsl = this.hsl;
    hsl[2] = hsl[2] * (1 + ratio);
    this.setColor(this.getHslString());
    return this;
  }
  public darken(ratio) {
    const hsl = this.hsl;
    hsl[2] -= hsl[2] * ratio;
    this.setColor(this.getHslString());
    return this;
  }
  public clamp(num, min, max) {
    return Math.min(Math.max(min, num), max);
  }
}
