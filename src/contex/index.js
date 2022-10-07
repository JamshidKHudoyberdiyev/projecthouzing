import { createContext} from 'react'


const ContextPRovider = createContext()

const RootContext = ({children}) => {
  return (
    <ContextPRovider.Provider value={"salom"}>
        {children}
    </ContextPRovider.Provider>  )
}

export default RootContext