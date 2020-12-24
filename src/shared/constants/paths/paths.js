import { DETAILS_PAGE, FAVORITES_PAGE, HOME_PAGE, LOGIN_PAGE } from './pathsNames';

const ROUTES = {
  home: { name: 'Beer catalog', url: HOME_PAGE },
  favorites: { name: 'Favorites', url: FAVORITES_PAGE },
  details: { name: 'Beer details', url: DETAILS_PAGE },
  login: { name: 'login', url: LOGIN_PAGE },
};

export default ROUTES;
