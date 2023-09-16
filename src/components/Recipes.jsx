import React from 'react'
import RecipeReviewCard from './card';

const cardData = [
    {
      title: 'Tikka Kabab',
      image:
        'https://www.foodfusion.com/wp-content/uploads/2023/07/GRAB-01-YT-4-300x225.jpg?v=1692087741',
      description:
        'This impressive paella is a perfect party dish impressive paella is a perfect party dish...',
    },
    {
      title: 'Sekh Kabab',
  
      image:
        'https://www.foodfusion.com/wp-content/uploads/2023/07/GRAB-01-YT-3-300x225.jpg?v=1691492072',
      description:
        'This impressive paella is a perfect party dish impressive paella is a perfect party dish...',
    },
    {
      title: 'Aloo Bhunna',
  
      image:
        'https://www.foodfusion.com/wp-content/uploads/2023/08/YT_02-300x225.jpg?v=1692960496',
      description:
        'This impressive paella is a perfect party dish impressive paella is a  impressive paella is a perfect..',
    },
    {
      title: 'juice',
      image:
        'https://www.foodfusion.com/wp-content/uploads/2023/08/YT_01-1-300x225.jpg?v=1692858581',
      description:
        'This impressive paella is a perfect party dish. impressive paella is a perfect party dish..',
    },
  ];
export const Recipes = () => {
  return (
   <>
   <h2 className='recipes'>Our <b>Recipes</b></h2>
      <div className='card-group'>
        {cardData.map((card, index) => (
          <div className='card' key={index}>
            <RecipeReviewCard
              title={card.title}
              subheader={card.subheader}
              image={card.image}
              description={card.description}
            />
          </div>
        ))}
      </div>
   </>
  )
}
