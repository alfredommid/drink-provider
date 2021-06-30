import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const Drink = ({drink}) => {
    //Extract values form the context
    const { setIdDrink } = useContext(ModalContext);

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{drink.strDrink}</h2>
                <img className="card-img-top" src={drink.strDrinkThumb} alt="drink-img"/>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdDrink(drink.idDrink)
                        }}
                    >
                        Ver Receta
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Drink;