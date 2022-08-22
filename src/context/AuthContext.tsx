import { createContext, useState } from "react";

interface IAuthContext {
    isLogIn: boolean;
    authorize: () => void;
    disauthorize: () => void;
}

export const AuthContext = createContext<IAuthContext>({
    isLogIn: false,
    authorize: () => {},
    disauthorize: () => {}
});

export const AuthState = ({ children }: { children: React.ReactNode }) => {
    const [ isLogIn, setIsLogIn ] = useState(false);

    const authorize = () => setIsLogIn(true);
    const disauthorize = () => setIsLogIn(false);

    return (
        <AuthContext.Provider value={{ isLogIn, authorize, disauthorize }}>
            { children }
        </AuthContext.Provider>
    )
}
