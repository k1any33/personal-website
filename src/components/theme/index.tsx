import { useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { FiMoon, FiSun } from 'react-icons/fi'

const SwitchThemeIcon = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    const body = document.documentElement
    body.setAttribute('data-theme', theme)
  }, [theme])

  if (typeof window === 'undefined') {
    return <></>
  } else {
    return (
      <div className="mx-2 cursor-pointer" onClick={toggleTheme}>
        {theme === 'dark' ? <FiMoon size={24} /> : <FiSun size={24} />}
      </div>
    )
  }
}

export default SwitchThemeIcon
