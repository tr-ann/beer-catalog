/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../Spinner/styles/Spinner.scss';
import Spinner from '../Spinner/Spinner';

export default function withInfiniteScroll(WrappedComponent) {
  function ComponentWithScroll(props) {
    const { doLoadData, isLoading } = props;
    const [page, setPage] = useState(1);

    const nextPage = useCallback(() => {
      setPage(page + 1);
    }, [page]);

    useEffect(() => {
      console.log(page);
      doLoadData({ page });
    }, [page, doLoadData]);

    const handleScroll = () => {
      document.addEventListener('scroll', () => {
        if (
          window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight
        ) {
          return;
        }
        nextPage();
      });
    };

    useEffect(() => {
      handleScroll();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <>
        <WrappedComponent {...props} />
        {isLoading ? <Spinner /> : null}
      </>
    );
  }

  ComponentWithScroll.propTypes = {
    doLoadData: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  return ComponentWithScroll;
}
