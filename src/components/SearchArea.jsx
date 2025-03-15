import React from 'react';
import { Input, Select } from 'antd';
import '../styles/SearchArea.scss';
const { Search } = Input;
const { Option } = Select;

const SearchArea = ({ searchTerm, handleSearchTitle, handleYearChange, handleTypeChange }) => (
    <section className="production-search-container">
      <Search className="production-title-search" placeholder="Search production" defaultValue={searchTerm} allowClear onSearch={handleSearchTitle}/>
      <Select className="production-type" defaultValue="movie" onChange={handleTypeChange} >
        <Option value="movie">Movie</Option>
        <Option value="series">TV Series</Option>
        <Option value="episode">Episode</Option>
      </Select>
      <Input className="production-year-search" placeholder="Year" allowClear onChange={handleYearChange}  type="number" min="1895"/>
    </section>
  );  

export default SearchArea;