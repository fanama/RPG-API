import * as React from 'react';
import { useRef, useState } from 'react';

export const ZoomContext = React.createContext(null);

// eslint-disable-next-line react/prop-types
export function ZoomProvider({ children }) {
    
    const [rate, setRate] = useState(1);

    return (
        <ZoomContext.Provider
            value={{
                rate, setRate
            }}
        >
            {children}
        </ZoomContext.Provider>
    );
}
