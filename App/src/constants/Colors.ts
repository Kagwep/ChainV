const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const skyBlue = '#36C5D5'; // Example sky blue
const deepSkyBlue = '#48B4DF'; // Example deeper sky blue
const whiteColor = '#48B4DF'; // White color

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  gradientColors: {
    start: skyBlue, // bottom of the screen
    middle: deepSkyBlue,
    end: whiteColor // top of the screen
  },
};
