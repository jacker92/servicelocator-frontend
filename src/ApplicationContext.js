import React, { createContext, useState, useMemo } from 'react'

export const ApplicationContext = createContext(null)

export const ApplicationProvider = ({ children }) => {
  const [services, setServices] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [activePage, setActivePage] = useState(1)
  const [loading, setLoading] = useState(false)

  const providerValue = useMemo(() => ({ services, setServices, searchTerm, setSearchTerm, activePage, setActivePage, loading, setLoading }),
    [services, setServices, searchTerm, setSearchTerm, activePage, setActivePage, loading, setLoading])
  return (
    <ApplicationContext.Provider value={providerValue}>
      {children}
    </ApplicationContext.Provider>
  )
}