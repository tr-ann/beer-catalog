export const selectBeers = (state) => state.beers.beersList;

export const selectError = (state) => state.beers.error;

export const selectIsLoading = (state) => state.beers.isLoading;

export const selectFavoritesIds = (state) => state.beers.favoritesIds;

export const selectFavorites = (state) => state.beers.favorites;

export const selectBeerInfo = (state) => state.beers.beerInfo;
