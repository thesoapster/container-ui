import React, { createContext } from "react";
import { Container, ContextStoreProps } from "../utils/Types";

interface AppDataContextProps {
    data: Container[];
}

const initialData: Container[] = [
    new Container()
];

export const AppDataContext = createContext({} as AppDataContextProps);

const AppData = ({ children }: ContextStoreProps) => {
    const store = {
        data: initialData,
    };

    return (
        <AppDataContext.Provider value={store}>
            {children}
        </AppDataContext.Provider>
    );
};

export default AppData;
