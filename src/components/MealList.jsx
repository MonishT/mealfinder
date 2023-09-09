// MealList.js
import React from 'react';
import { Link } from 'react-router-dom';

function MealList({ meals }) {
  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <div className="col-md-12 col-lg-6 col-xl-4" key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h3>{meal.strMeal}</h3>
          <Link to={`/meals/${meal.idMeal}`}>Watch Video</Link>
        </div>
      ))}
      {" "}
    </div>
  );
}

export default MealList;
