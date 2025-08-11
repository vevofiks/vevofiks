import React, { useState } from "react";
import { createContext, useContext } from "react";

interface IAppContext {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    isSwiped: boolean;
    setSwiped: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [page, setPage] = useState(0);
    const [isSwiped, setSwiped] = useState(false);
    return (
        <AppContext.Provider value={{ page, setPage, isSwiped, setSwiped }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

export default AppProvider;
