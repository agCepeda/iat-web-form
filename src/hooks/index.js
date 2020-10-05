import {useEffect, useState} from "react";

export const useWindowSize = () => {
    const isClient = typeof window === 'object';

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}


// Hook
export const useKeyPress = (targetKeys) => {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(null);

    // If pressed key is our target key then set to true
    function downHandler({ key }) {
        if (targetKeys.indexOf(key) >= 0) {
            setKeyPressed(new Date());
        }
    }

    // Add event listeners
    useEffect(() => {
        window.addEventListener('keypress', downHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keypress', downHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
}
