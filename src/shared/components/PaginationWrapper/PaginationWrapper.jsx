/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PaginationPanel from '../PaginationPanel/PaginationPanel';
import { PAGE_ITEMS_AMOUNT } from '../../constants/pagination/pagination';

export default function withPagination(WrappedComponent) {
  const ComponentWithPagination = (props) => {
    const { data, doLoadData } = props;
    const [page, setPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
      doLoadData();
    }, [doLoadData]);

    const handleChangePage = (newPage) => {
      setPage(newPage);
    };

    useEffect(() => {
      const startItem = page * PAGE_ITEMS_AMOUNT;
      const items = data.slice(startItem, startItem + PAGE_ITEMS_AMOUNT);
      setCurrentItems(items);
    }, [data, page, setCurrentItems]);

    const pagesAmount = Math.ceil(data.length / PAGE_ITEMS_AMOUNT);
    const { data: unnecessarry, ...propsForWrapped } = props;

    return (
      <>
        <WrappedComponent {...propsForWrapped} beers={currentItems} />
        <PaginationPanel pages={pagesAmount} currentPage={page} onChangePage={handleChangePage} />
      </>
    );
  };

  ComponentWithPagination.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    doLoadData: PropTypes.func.isRequired,
  };

  ComponentWithPagination.defaultProps = {
    data: [],
  };

  return ComponentWithPagination;
}
