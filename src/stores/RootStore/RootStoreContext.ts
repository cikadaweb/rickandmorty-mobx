import {createContext, useContext} from "react";
import RootStore from "./index.ts";

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStores = () => {
    const context  = useContext(RootStoreContext);

    if (context === null) {
        throw new Error('');
    }

    return context;
}