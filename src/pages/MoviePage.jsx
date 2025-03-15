import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovieData } from '../store/MovieSlice';
import { Spin, Alert} from 'antd';
import { throttle } from 'lodash';
import SearchArea from '../components/SearchArea';
import MovieDataTable from '../components/MovieDataTable';
import CustomPagination from '../components/CustomPagination';
import '../styles/MoviePage.scss';

const MoviePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movies, status, totalResults, error} = useSelector((state) => state.movies);
  const [searchTerm, setSearchTerm] = useState('Pokémon');
  const [year, setYear] = useState('');
  const [type, setType] = useState('movie');
  const [page, setPage] = useState(1);

   
  const conditionalSearch = useCallback(() => {
    let searchQuery = '';
    try {
    if (!searchTerm && (year)) {     
      searchQuery = 'year';
    } 
    else  if (!searchTerm && !year && type) {
      searchQuery = 'all'; 
    }else {
      searchQuery = searchTerm || 'Pokémon';
    }
    dispatch(fetchMovieData({ search: searchQuery, year, type, page, plot: 'full' }));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, searchTerm, year, type, page]);


  useEffect(() => {
    conditionalSearch();
  }, [searchTerm, year, type, page]);




  const handleSearchTitle = useCallback((value) => {
    try {
      const convertedStringValue = value?.toString().trim();
      setSearchTerm(convertedStringValue);
      setPage(1);
    } catch (error) {
      console.log(error.message || 'Error handling search title');
    }
  }, []);
  const handleTypeChange = useCallback((value) => {
    try {
    setType(value);
    setPage(1);
    } catch (error) {
      console.error(error.message || 'Error handling type change');
    }
  }, []);
  const handleYearChange = useCallback(
    throttle((e) => {
      try {
        const yearValue = e.target.value.trim();
        setYear(yearValue);
        setPage(1);
      } catch (error) {
        console.error(error.message || 'Error handling year change'); 
      }
    }, 2000),
    []
  );
  

  return (
    <div className="production-page">
      <Spin size="large" spinning={status === 'loading'} tip="Loading movies..." >
      {error && <Alert message="Error" description={error} type="error" showIcon />}
        <SearchArea 
          searchTerm={searchTerm}
          handleSearchTitle={handleSearchTitle}
          handleYearChange={handleYearChange}
          handleTypeChange={handleTypeChange}
        />
        <MovieDataTable 
          movies={movies}
          navigate={navigate}
          status={status}
        />
        <CustomPagination 
          page={page}
          totalResults={totalResults}
          setPage={setPage}
        />
      </Spin>
    </div>
  );
};

export default MoviePage;
