import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import '../App.css'
const trendingCardData = [
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2017/07/Surf-Excel-Logo-1.png',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2017/07/Dawn-Foods-1.png',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2017/07/Meat-One-Meat-Experts-Logo-1.png',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2017/07/New-Knorr-Logo-Hi-Res-2-1.png',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2017/07/sufi-cooking-oil-1.png',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2017/07/Kenwood-Logo-1.png',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2017/07/Youngs-Honey-Logo-1.png',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2017/07/Vim-Logo.png',
    },
];
const CookingPatners = () => {
    return (
        <>
            <div className='partners'>
                <h2>Our Happy <b>Cooking Patners</b></h2>
                <div className='trending-card-group'>
                    {trendingCardData.map((items) => (
                        <Card className="all-card">
                            <CardMedia
                                component="img"
                                height="194"
                                image={items.image}
                                alt="Image"
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}
export default CookingPatners;