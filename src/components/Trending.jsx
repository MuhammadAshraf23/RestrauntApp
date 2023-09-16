import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import '../App.css'
const trendingCardData = [
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2017/04/P1090008-300x225.jpg?v=1587767800',
        description:
            'Chicken Manchurian',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2017/05/ID-R00222-1-300x225.jpg?v=1587767132',
        description:
            'Shab Daig',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2021/01/Halwa-kaddu-with-Gosht-Recipe-by-Food-fusion-5-300x225.jpg?v=1609933518',
        description:
            'Halwa Kaddu Gosht',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2021/08/YT-grab-2-9-300x225.jpg?v=1630297812',
        description:
            'Malai Tikka Pulao',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2022/11/YT-Grab-05-1-300x225.jpg?v=1669968769',
        description:
            'Fish Tikka Biryani',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2020/07/Broccoli-paratha-Recipe-by-Food-fusion-2-300x225.jpg?v=1594382571',
        description:
            'Broccoli Paratha',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2023/04/yt8-300x225.jpg?v=1681373315',
        description:
            'Turkish Doner',
    },
    {
        image:
            'https://www.foodfusion.com/wp-content/uploads/2020/11/Spicy-potato-pepper-curry-Recipe-by-Food-fusion-2-300x225.jpg?v=1606450840',
        description:
            'Spicy Potato Pepper Curry',
    },
];
const Trending = () => {
    return (
        <>
            <div className='trending'>
                <h2>Trending on <b>Foody</b></h2>
                <div className='trending-card-group'>
                    {trendingCardData.map((items) => (
                        <Card className='all-card'>
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
export default Trending;