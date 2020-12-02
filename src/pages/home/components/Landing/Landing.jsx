import React from 'react';
import Header from '../../../../shared/components/Header/components/PageHeader/PageHeader';
import BeerListContainer from '../BeerList/BeerListContainer';
import SearchContainer from '../Search/SearchContainer';
import ROUTES from '../../../../shared/constants/paths/paths';

const Landing = () => {
  const { home } = ROUTES;

  return (
    <>
      <Header currentPage={home.name} />
      <div>
        <SearchContainer />
        <BeerListContainer />
      </div>
    </>
  );
};

export default Landing;
