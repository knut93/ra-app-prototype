import { createContext, useState, useEffect } from 'react';

const initialState = {
    currentPath: '/',
    navigate: (to: string) => {},
}
 
export interface ProviderContextInterface {
    currentPath: string,
    navigate: Function
}

//type NavigationState = ProviderContextInterface | null;

export const NavigationContext = createContext<ProviderContextInterface>(initialState);

function NavigationProvider({children}: {children: React.ReactNode}) {
    const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

    useEffect(() => {
        console.log("useeffect called")
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler)
        };
    }, []);

    const navigate = (to: string) => {
        console.log("pushing the new link...")
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationProvider;