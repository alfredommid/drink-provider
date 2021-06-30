import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

//create context
export const CategoriesContext = createContext();

//Provider: where the fns and states are
const CategoriesProvider = (props) => {
    //create state of context
    const [categories, setCategories] = useState([]);

    //useEffect to request the api with the categories
    useEffect(() => {
        const getCategories = async () => {
            //Request with axios the list of categories from the API URL
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categories = await axios.get(url)

            setCategories(categories.data.drinks);
        }
        getCategories();
    }, []);

    return(
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;