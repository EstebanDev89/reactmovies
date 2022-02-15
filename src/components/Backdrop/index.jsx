import React from 'react'
import './styles.css'

export default function Backdrop({ children }) {
    return (
        <div className="backdrop">
            {children}
        </div>

    )
}

