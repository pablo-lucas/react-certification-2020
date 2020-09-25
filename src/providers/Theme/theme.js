const base = {
  easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  colorWhite: 'rgb(255, 255, 255)',
  colorBlack: 'rgb(0, 0, 0)',
};

const dark = {
  id: 'dark',
  ...base,
  backgroundColor: '#1c1a21',
  textColor: 'white',
  navColor: 'black',
  icon: 'white !important',
};

const light = {
  id: 'light',
  ...base,
  backgroundColor: '#fff',
  textColor: 'grey',
  navColor: '#fff',
};

export const theme = { dark, light };
