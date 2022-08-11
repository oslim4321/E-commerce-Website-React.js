import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
   
    return <AppContext.Provider value={{
      
        
    }}>{children}</AppContext.Provider>
}
export const useGlobalContext=() => {
    return useContext(AppContext)
        
}
    
export { AppContext, AppProvider }

