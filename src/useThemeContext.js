import { useContext } from 'react';
import ThemeContext from './ThemeContextObject';

const useThemeContext = () => useContext(ThemeContext);

export default useThemeContext;