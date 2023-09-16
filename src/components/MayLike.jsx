import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import '../App.css'
const trendingCardData = [
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2021/09/YT-Grab-3-5-300x225.jpg?v=1632198051',
        description:
            'Taco Beef Burger With Guacamo',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2018/01/ID-R00532-Masala-Oats-Recipe-By-Food-fusion-2-300x225.jpg?v=1587765436',
        description:
            'Masala Oats',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2019/10/Wanpaku-Sandwich-Recipe-By-food-fusion-2-300x225.jpg?v=1587763056',
        description:
            'Wanpaku Sandwich',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2019/10/Tomato-Chutney-2-ways-Recipe-by-Food-fusion-1-300x225.jpg?v=1587763026',
        description:
            'Tomato Chutney 2 Ways',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2021/04/Soky-Yogurt-Chicken-Recipe-by-Food-fusion-1-300x225.jpg?v=1617772606',
        description:
            'Smoky Yogurt Chicken',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2018/09/Fish-Kofta-Recipe-by-Food-fusion-5-300x225.jpg?v=1587764594',
        description:
            'Fish Kofta',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2017/05/ID-R00133-A-300x225.jpg?v=1587766625',
        description:
            ' Hot & Sour Soup (Chicken)',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2019/05/Sindhi-Kharkon-Recipe-by-Food-fusion-2-300x225.jpg?v=1587763478',
        description:
            'Sindhi Kheer Kharkon',
    },
];
const MayLike = () => {
    return (
        <>
            <div className='trending Also-Like'>
                <h2>You May <b>Also Like</b></h2>
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
                                <Typography variant="body2" color="text.secondary" fontWeight="bold">
                                    {items.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}
export default MayLike;