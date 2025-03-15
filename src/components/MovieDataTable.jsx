import React from 'react';
import { Table } from 'antd';
import '../styles/DataTable.scss';

const MovieDataTable = ({ movies, navigate, status }) => {
  const columns = [
    { 
      title: 'Name', 
      dataIndex: 'Title', 
      key: 'Title',
      render: (text, record) => (
        <a 
          onClick={(e) => {
            e.preventDefault();
            navigate(`/movie/${record.imdbID}`);
          }}
          style={{ cursor: 'pointer' }}
        >
          {text}
        </a>
      )
    },
    { title: 'Release Year', dataIndex: 'Year', key: 'Year' },
    { title: 'IMDb ID', dataIndex: 'imdbID', key: 'imdbID' },
    { title: 'Type', dataIndex: 'Type', key: 'Type' },
  ];

  return (
    <section className="custom-table-container">
      <Table  dataSource={movies} columns={columns} pagination={false} loading={status === 'loading'} rowKey="imdbID"/>
    </section>
  );
};
export default MovieDataTable;