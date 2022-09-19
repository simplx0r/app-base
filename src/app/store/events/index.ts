import { createApi, createStore } from 'effector';

type Theme = 'dark' | 'light'
const currentTheme = createStore<Theme>('light');
const themeChange = createApi(currentTheme, ({
  changeTheme: (theme) => (theme === 'dark' ? 'light' : 'dark'),
}));
export { currentTheme, themeChange };
