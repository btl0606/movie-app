import React from 'react';
import { Card } from 'antd';
import '../styles/MoviePoster.scss';

const MoviePoster = ({ title, poster }) => (
    <Card className='movie-poster-card' variant="borderless" >         
        <img src={poster} alt={title} />
    </Card>
);

export default MoviePoster;