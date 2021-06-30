import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const DrinksContext = createContext();

const DrinksProvider = (props) => {
    const [drinks, setDrinks]= useState([]);

    const [search, searchDrinks] = useState({
        name: '',
        category: ''
    });
    const [consult, setConsult] = useState(false);

    const {name, category} = search;

    useEffect(() => {
        if(consult){
            const getDrinks = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
                const response = await axios.get(url)
                //console.log(response.data.drinks)
                setDrinks(response.data.drinks);
            }
            getDrinks();
        }
        
    }, [search])

    return ( 
        <DrinksContext.Provider
            value={{
                drinks,
                searchDrinks,
                setConsult
            }}
        >
            {props.children}
        </DrinksContext.Provider>
     );
}
 
export default DrinksProvider;