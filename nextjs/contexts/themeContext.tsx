import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

function usePrevious(theme: 'dark' | 'light') {
  const ref = useRef<string>()
  useEffect(() => {
    ref.current = theme
  })
  return ref.current
}

export const ThemeContext = React.createContext<{
  theme: 'dark' | 'light'
  toggleTheme: () => void
}>({ theme: 'dark', toggleTheme: () => null })

export const ThemeProvider: React.FC = ({ children }) => {
  // defaults to light theme
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  // set user's preferred color scheme on first load
  useEffect(() => {
    setTheme(
      !!window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
    )
  }, [])

  // change theme
  const oldTheme = usePrevious(theme)
  useEffect(() => {
    document.documentElement.classList.remove(`theme-${oldTheme}`)
    document.documentElement.classList.add(`theme-${theme}`)
  }, [theme, oldTheme])

  function toggleTheme() {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
