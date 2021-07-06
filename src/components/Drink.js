import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Drink = ({drink}) => {

    //MAterial UI modal config
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    //Extract values form the context
    const { fullDrink, setFullDrink , setIdDrink } = useContext(ModalContext);

    const displayIngredients = fullDrink => {
        let ingredients = [];
        for (let i = 1; i < 16; i++) {
            if(fullDrink[`strIngredient${i}`]){
                ingredients.push(
                    <li>{fullDrink[`strIngredient${i}`]} : {fullDrink[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients;
    }

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
                            setIdDrink(drink.idDrink);
                            handleOpen();
                        }}
                    >
                        Learn to do it!
                    </button>
                    <Modal
                        open = {open}
                        onClose = {() => {
                            setIdDrink(null)
                            setFullDrink({})
                            handleClose();
                        }}
                    >
                        <div 
                            style={modalStyle}
                            className={classes.paper}
                        >
                            <h2>{fullDrink.strDrink}</h2>
                            <h3 className="mt-4">How to prepare?</h3>
                            <p>
                                {fullDrink.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={fullDrink.strDrinkThumb} alt={fullDrink.strGlass}/>
                            <h4>Ingredients</h4>
                            <ul>
                                {displayIngredients(fullDrink)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Drink;