import React, { useEffect, useState } from 'react'
import { Themeprovider } from './context/theme'
import ThemeBtn from './Components/Themebtn'
import Card from './Components/Card'

function App() {
  const [themeMode, setThememode] = useState("light")
  // light Theme
  const lightTheme =()=>{
    setThememode("light")
  }
  // dark Theme
  const darkTheme =()=>{
    setThememode("dark")
  }
  // Actual change in theme
  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <Themeprovider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center bg-slate-300">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
      </Themeprovider>
  )
}

export default App