import React from 'react';

function MealItem({ meal }) {
  const openVideoInNewTab = () => {
    window.open(`https://www.youtube.com/watch?v=${meal.strYoutube.slice(-11)}`, '_blank');
  };

  return (
    <div className="meal-item">
        <br/>
      <div className="meal-image">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <br/>
      <h3 className="meal-title">{meal.strMeal}</h3>
      <br/>
      <button className="watch-button" onClick={openVideoInNewTab}>
        Watch Video
      </button>
      <br/><br/>
    </div>
  );
}

export default MealItem;
