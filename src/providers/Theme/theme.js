const base = {
  easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  colorWhite: 'rgb(255, 255, 255)',
  colorBlack: 'rgb(0, 0, 0)',
};

const dark = {
  id: 'dark',
  ...base,
  backgroundColor: '#1c1a21 !important',
  textColor: 'white !important',
  navColor: 'black',
  icon: 'white !important',
  navBar: {
    backgroundColor: 'black !important',
  },
  card: {
    backgroundColor: 'black',
  },
  meta: '#98a0aa',
};

const light = {
  id: 'light',
  ...base,
  backgroundColor: '#fff',
  textColor: 'grey',
  navColor: '#fff',
  navBar: {
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'white',
  },
};

export const theme = { dark, light };
