import React from 'react';

const Ingredients = ({ meal, setMeal }) => {

    let eda;
    if (meal === "Первое") {
        eda = (
            <div>бульон</div>
        )
    } else if (meal === "Второе") {
        eda = (
            <div>Плов</div>
        )
    } else if (meal === "Компот") {
        eda = (
            <div>Жидкость</div>
        )
    }


    return (
        <div>
            {eda}
        </div>
    );
};

export default Ingredients;