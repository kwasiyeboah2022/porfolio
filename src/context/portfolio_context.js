import React, { createContext, useContext, useReducer } from 'react'
import reducer from '../reducers/portfolio_reducer'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../utils/actions'

const initialState = {
  isSideBar_Open: false,
}

const PortfolioContext = createContext()

export const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  return (
    <PortfolioContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export const usePortfolioContext = () => {
  return useContext(PortfolioContext)
}
