import React from 'react';
import {Typography, Rate, Space,Tag,Divider}  from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faVideo, faAward, faRankingStar, faCalendarDays, faCommentNodes, faGlobe } from '@fortawesome/free-solid-svg-icons';


const { Text, Title } = Typography;

const MovieInfo = ({movie}) => {
    
    const infoItems = [
        { icon: faVideo, label: 'Director', value: movie.Director },
        { icon: faUsers, label: 'Cast', value: movie.Actors },
        { 
          icon: faRankingStar, 
          label: 'IMDb Rating', 
          value: (
            <>
              <Rate disabled defaultValue={parseFloat(movie.imdbRating) / 2} allowHalf />
              <Text>({movie.imdbRating}/10)</Text>
            </>
          )
        },
        { icon: faCalendarDays, label: 'Released', value: movie.Released },
        { icon: faCommentNodes, label: 'Language', value: movie.Language },
        { icon: faGlobe, label: 'Country', value: movie.Country },
        { icon: faAward, label: 'Awards', value: movie.Awards },
      ];
  return (
    <Space direction="vertical" size="large">
        <Title level={2}>{movie.Title}</Title>
        <Space>
            <Tag color="blue">{movie.Year}</Tag>
            <Tag color="green">{movie.Rated}</Tag>
            <Tag>{movie.Runtime}</Tag>
            <Tag color="purple">{movie.Genre}</Tag>
        </Space>  
        <Divider/>
        <Space direction="vertical">
            {infoItems.map((item, index) => (
                <Space key={index} style={{ display: "flex", alignItems: "center" }}>     
                    <FontAwesomeIcon icon={item.icon} size="lg" style={{ color: "#74C0FC", marginRight: "8px", display: "flex", width: "30px"}}/>                  
                    <Text strong >{item.label}:</Text>
                    {typeof item.value === 'string' ? <Text>{item.value}</Text> : item.value}
                </Space>
            ))}
        </Space>
  </Space>
  )
}

export default MovieInfo