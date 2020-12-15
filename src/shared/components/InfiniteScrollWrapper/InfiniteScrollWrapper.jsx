/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Spinner/styles/Spinner.scss';
import Spinner from '../Spinner/Spinner';

export default function withInfiniteScroll(WrappedComponent) {
  function ComponentWithScroll(props) {
    const { doLoadData, isLoading } = props;

    useEffect(() => {
      doLoadData();
    }, [doLoadData]);

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        doLoadData();
      }
    };

    useEffect(() => {
      document.addEventListener('scroll', handleScroll);
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
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
