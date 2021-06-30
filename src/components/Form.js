import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import { DrinksContext } from '../context/DrinksContext';

const Formulario = () => {
    const [search, setSearch] = useState({
        name: '',
        category:''
    });

    const { categories } = useContext(CategoriesContext);
    const { searchDrinks, setConsult } = useContext(DrinksContext)

    //Fn to read the content
    const getDrinkData = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form 
            className="col-12"
            onSubmit={ e => {
                e.preventDefault();
                searchDrinks(search);
                setConsult(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Search by category or ingredient</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="ingredient"
                        className="form-control"
                        type="text"
                        placeholder="Ingredient"
                        autoComplete="off"
                        onChange={getDrinkData}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={getDrinkData}
                    >
                        <option value="">--Category--</option>
                        {categories.map(category => (
                            <option 
                                key={category.strCategory}
                                value={category.strCategory}
                            >{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Get me a drink!"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;