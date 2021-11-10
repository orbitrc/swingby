import { useState, useEffect } from 'react';
function useSwingby() {
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    function windowResizeHandler() {
        setScreen({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }
    useEffect(() => {
        setScreen({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        window.addEventListener("resize", windowResizeHandler);
        return () => {
            window.removeEventListener("resize", windowResizeHandler);
        };
    }, []);
    return {
        screen,
    };
}
export { useSwingby, };
