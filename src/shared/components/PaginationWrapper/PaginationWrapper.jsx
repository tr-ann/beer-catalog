/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PaginationPanel from '../PaginationPanel/PaginationPanel';

export default function withPagination(WrappedComponent) {
  const ComponentWithPagination = (props) => {
    const { data, doLoadData } = props;
    const [page, setPage] = useState(0);

    const handleChangePage = (newPage) => {
      setPage(newPage);
    };

    useEffect(() => {
      doLoadData(page);
    }, [doLoadData, data, page]);

    return (
      <>
        <WrappedComponent {...props} />
        <PaginationPanel pages={6} currentPage={page} onChangePage={handleChangePage} />
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
