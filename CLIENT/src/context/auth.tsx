import React, { createContext, useState } from 'react';

export const AuthContext = createContext<ProviderContextInterface>({});

export interface ProviderContextInterface {
    auth: object,
    setAuth: Function,
}

export const AuthProvider = ({ children }: {children: React.ReactNode})=> {
    const [auth, setAuth] = useState({});

    return(
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;