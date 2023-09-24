import { createContext, useEffect, useState } from 'react'

interface NavigationData {
  currentPath: string;
  navigate: (to: string) => void
}
const navigationContext = createContext<NavigationData>({
  currentPath: '',
  navigate: () => {}
})

interface NavigationProviderProps {
  children: React.ReactNode
}
const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const trackPathChanges = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', trackPathChanges)
    return () => window.removeEventListener('popstate', trackPathChanges)
  }, [])

  const navigate = (to: string) => {
    window.history.pushState({}, '', to)
    setCurrentPath(to)
  }

  return <navigationContext.Provider value={{ currentPath, navigate }}>
    {children}
  </navigationContext.Provider>
}

export default navigationContext

export {
  NavigationProvider
}
