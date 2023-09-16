import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import "../App.css"
const trendingCardData = [
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2018/05/ramzan-150x150.png',
        description:
            'Ramazan',
        Recipes:
            '110'
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2018/05/snacks-150x150.png',
        description:
            ' Appertizers',
        Recipes:
            '130'
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2018/05/breakfast-150x150.png',
        description:
            'BreakFast',
        Recipes:
            '50'
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2018/05/desserts-150x150.png',
        description:
            ' Deserts',
        Recipes:
            '80'
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2018/05/biryani-150x150.png',
        description:
            '  Biryani',
        Recipes:
            '40'
    },
]
export const MoreCategory = () => {
    return (
        <>
            <div className="more-categ">
                <h2>More <b>Category</b></h2>
                <div className='trending-card-group'>
                    {trendingCardData.map((items) => (
                        <Card className="all-card">
                            <CardMedia
                                component="img"
                                height="194"
                                image={items.image}
                                alt="Image"
                            />
                            <CardContent>
                                <Typography variant="body2" fontWeight="bold">
                                    <Typography variant="body2" color="text.secondary" fontWeight="bold">
                                        {items.description}
                                    </Typography>
                                    <Typography variant="body2" fontWeight="bold">
                                        <span style={{ color: 'orange' }}>{items.Recipes}Recipes</span>
                                    </Typography>
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}
