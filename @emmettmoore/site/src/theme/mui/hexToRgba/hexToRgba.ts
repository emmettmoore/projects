export default (hex: string): Array<number> => {
  let hexParts: string[];
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    hexParts = hex.substring(1).split('');
    if (hexParts.length == 3) {
      hexParts = [
        hexParts[0],
        hexParts[0],
        hexParts[1],
        hexParts[1],
        hexParts[2],
        hexParts[2],
      ];
    }
    const sixDigitHexCode = Number('0x' + hexParts.join(''));
    return [
      (sixDigitHexCode >> 16) & 255,
      (sixDigitHexCode >> 8) & 255,
      sixDigitHexCode & 255,
    ];
  }
  throw new Error('Bad Hex');
};
