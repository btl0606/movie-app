import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Card,Typography, Spin, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import MovieInfo from '../components/MovieInfo';
import MoviePoster from '../components/MoviePoster';
import { getMovieDetails } from '../services/apiServices';
import '../styles/MovieDetailPage.scss';


const MovieDetailPage = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);


const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovie = useCallback(async () => {
    try {
      const data = await getMovieDetails(id);
      setMovie(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  if (loading) return <Spin className='product-detail-spin' size="large"/>

  if (error) {
    return (
      <div className='product-detail-alert-container' >
        <Alert className='product-detail-alert' message="Error" description={error} type="error" showIcon />
      </div>
    );
  }

  if (!movie) return null;

  return (
    <Layout className='product-detail-layout'>
        <Header className='product-detail-layout-header'> 
            <Button className='product-detail-layout-header-button' type="text" onClick={() => navigate('/')} >
            <FontAwesomeIcon icon={faHome}  />
            </Button>
        </Header>
        <Layout className='product-detail-layout-content'>
            <Sider className='product-poster' width="25%" >
             <MoviePoster title={movie.Title} poster={movie.Poster} />
            </Sider>
            <Content className='product-detail-content'> 
                <Card>            
                    <MovieInfo movie={movie} />                 
                </Card>
            </Content>
        </Layout>
        <Footer className='product-detail-footer'>{movie.Plot}</Footer>
    </Layout>

  );
};

export default MovieDetailPage;