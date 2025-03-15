import React from 'react';
import { Pagination } from 'antd';
import '../styles/CustomPagination.scss';

const CustomPagination = ({ page, totalResults, setPage }) => (
  <section className="custom-pagination-container">
    <Pagination current={page} total={totalResults} pageSize={10} onChange={(page) => setPage(page)} showSizeChanger={false}/>
  </section>
);

export default CustomPagination;