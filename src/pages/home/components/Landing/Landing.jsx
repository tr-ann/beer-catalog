import React from 'react';
import Header from '../../../../shared/components/Header/components/PageHeader/PageHeader';
import BeerListContainer from '../BeerList/BeerListContainer';
import Search from '../Search/Search';
import Routes from '../../../../shared/constants/paths/paths';

const Landing = () => {
  const { home } = Routes;

  return (
    <>
      <Header currentPage={home.name} />
      <div>
        <Search />
        <BeerListContainer />
      </div>
    </>
  );
};

export default Landing;
