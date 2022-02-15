import React, { useState, createContext } from 'react';

export const loadingContext = createContext();

export default function LoadingContext({ children }) {
    const [isLoading, setLoading] = useState(false)

    return <loadingContext.Provider value={{ isLoading, setLoading }}>
        {children}
    </loadingContext.Provider>;
}