import React, { useState } from 'react';
import Ingredients from './Ingredients';
const Receipts = ({ meal, setMeal }) => {


    return (
        <div>
            <input type="radio" name="hz" onChange={() => setMeal("Первое")} /> Первое
            <input type="radio" name="hz" onChange={() => setMeal("Второе")} /> Второе
            <input type="radio" name="hz" onChange={() => setMeal("Компот")} /> Компот
            <Ingredients meal={meal} />
        </div>
    );
};

export default Receipts;