/* eslint-disable prettier/prettier */
export const neutral = {
  white: '#ffffff',
  s100: '#efeff6',
  s150: '#dfdfe6',
  s200: '#c7c7ce',
  s250: '#bbbbc2',
  s300: '#9f9ea4',
  s400: '#7c7c82',
  s500: '#515154',
  s600: '#38383a',
  s700: '#2d2c2e',
  s800: '#212123',
  s900: '#161617',
  s1001: '#637381',
  black: '#000000',
};

export const primary = {
  extraLight: '#64748B',
  light: '#70AEDB',
  brand: '#005C8A',
  dark: '#006EAF',
  brandSecondary: '#3AC1EF',
  baseColor: '#919EAB52',
  theme: '#00739B',
};

export const secondary = {
  light: '#b968e8',
  brand: '#888888',
  dark: '#bfebff',
};

export const textColor = {
  onPrimary: '#ffffff',
  onSecondary: '#004684',
  onSurface: '#000',
};

export const danger = {
  light: '#cf6d6d',
  default: '#EF4D4D',
  dark: '#B71D18',
  transparent: '#FF563029',
  cdark: '#FF0000',
};

export const surface = {
  default: '#fff',
  light: '#FAFAFF',
  background: '#F9FBFC',
};

export const success = {
  default: '#008a09',
  transparent: '#36B37E29',
  dark: '#1B806A',
};

export const warning = {
  light: '#B1751B',
  light100: '#F3EADD',
  default: '#cf9700',
};

export const info = {
  default: '#2373E0',
};

export const notification = {
  surface: '#0061FE14',
  unread: '#824890',
  read: '#283750',
};

export const logo = {
  pink: '#C60176',
  lightPink: '#fbebe4',
};

export const gradient = {};

export const applyOpacity = (hexColor: string, opacity: number): string => {
  const red = parseInt(hexColor.slice(1, 3), 16);
  const green = parseInt(hexColor.slice(3, 5), 16);
  const blue = parseInt(hexColor.slice(5, 7), 16);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export const transparent = {
  clear: 'rgba(255, 255, 255, 0)',
  lightGray: applyOpacity(neutral.s300, 0.4),
  darkGray: applyOpacity(neutral.s800, 0.8),
};
