import { ThemeProvider } from './contexts/theme'
import './App.css'
import { useState,useEffect } from 'react';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  const [themeMode, setThemeMode] = useState('light');
  const lightTheme = () => setThemeMode('light');
  const darkTheme = () => setThemeMode('dark');

  //actual change of theme

  useEffect(() => {
  document.querySelector('html').classList.remove('dark', 'light');
  document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);//depemdency anything that changes the themeMode will trigger this effect

  return (
    <>
      <ThemeProvider value={{themeMode,lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Theme btn */}
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card component */}
              <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
