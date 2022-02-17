import React, { useState, createContext } from 'react';

export const loadingContext = createContext();

export default function LoadingContext({ children }) {
    const [isLoading, setIsLoading] = useState(false)

    return <loadingContext.Provider value={{ isLoading, setIsLoading }}>
        {children}
    </loadingContext.Provider>;
}