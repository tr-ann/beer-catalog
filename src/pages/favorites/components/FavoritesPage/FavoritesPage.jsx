import React from 'react';
import Header from '../../../../shared/components/Header/components/PageHeader/PageHeader';
import FavoriteBeersContainer from '../FavoriteBeerList/FavoriteBeersContainer';
import ROUTES from '../../../../shared/constants/paths/paths';

const FavoritesPage = () => {
  const { favorites } = ROUTES;

  return (
    <>
      <Header currentPage={favorites.name} />
      <FavoriteBeersContainer />
    </>
  );
};

export default FavoritesPage;
