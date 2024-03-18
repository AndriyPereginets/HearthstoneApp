import {useCallback, useState} from "react";

export const Http = () => {

    const [proces, setProces] = useState('waiting');
   
    const request = useCallback(async (url, options) => {
        
        setProces('loading')

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            setProces('error')
            throw(error)
        } finally {
            setProces('confirmed')
        }
    }, []);
    
    
    return { request, setProces, proces }
}