import React, {useContext} from 'react';
import Drink from './Drink';
import { DrinksContext } from '../context/DrinksContext';

const DrinksList = () => {
    const {drinks} = useContext(DrinksContext)
    console.log(drinks)

    return ( 
        <div className="row mt-5">
            {drinks.map(drink => (
                <Drink
                    key={drink.idDrink}
                    drink={drink}
                />
            ))}
        </div>
     );
}
 
export default DrinksList;