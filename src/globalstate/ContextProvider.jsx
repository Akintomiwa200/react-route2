import { createContext, useState } from 'react'


export const MyContext = createContext(null);

const ContextProvider = ({ children }) => {



    const [greet, setGreet] = useState({
        name: "Akintomiwa",
        email: "3VbL5@example.com",
        password: "12345"
    });
    return(
      <MyContext.Provider value={{greet, setGreet}}>
        {children}
    </MyContext.Provider>
    )
}

export default ContextProvider