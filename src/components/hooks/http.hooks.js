import {useCallback} from "react";

export const Http = () => {
   
    const request = useCallback(async (url, options) => {
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            console.error(error);
        }
    }, []);
    

    return { request }
}