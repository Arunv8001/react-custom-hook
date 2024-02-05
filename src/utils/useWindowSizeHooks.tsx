import { useLayoutEffect, useState } from "react";

const useWindowSizeHooks = () => {
    const [size, setSize] = useState<number[]>([0, 0])
    // the layout measurements before the browser repaints the screen
    useLayoutEffect(() => {
        const resizeHandler = () => {
            setSize([window.innerHeight, window.innerWidth]);
          }
          window.addEventListener("resize", resizeHandler)
          resizeHandler()
        return () => window.removeEventListener("resize", resizeHandler)
    }, [])

    return size
}

export default useWindowSizeHooks;