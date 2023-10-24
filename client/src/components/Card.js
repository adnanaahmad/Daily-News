import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function StoryCard(props) {
    const openExternalPage = () => {
        window.open(props.data.url, '_blank');
      };
    return (
        <Card sx={{ maxWidth: 345 }} onClick={openExternalPage}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={props.data.multimedia[0].url}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.data.abstract}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
}