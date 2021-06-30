import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

//Create context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //Provider State
    const [ idDrink, setIdDrink ] = useState(null);
    const [ fullDrink, setFullDrink] = useState({});

    //useEffect to make a request with axios
    useEffect(() => {
        const getFullDrink = async () => {
            if(!idDrink) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
            const response = await axios.get(url)
            setFullDrink(response.data.drinks[0]);
        }
        getFullDrink();
    }, [idDrink])

    return ( 
        <ModalContext.Provider
            value={{
                setIdDrink
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;