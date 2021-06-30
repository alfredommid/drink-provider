import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import DrinksList from './components/DrinksList';
import CategoriesProvider from './context/CategoriesContext'
import DrinksProvider from './context/DrinksContext'
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <ModalProvider>
          <Header/>
          <div className="container mt-5">
            <div className="row">
              <Form/>
            </div>
            <DrinksList/>
          </div>
        </ModalProvider>
      </DrinksProvider>
    </CategoriesProvider>
    
  );
}

export default App;
