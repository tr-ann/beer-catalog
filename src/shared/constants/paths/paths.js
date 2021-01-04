import {
  DETAILS_PAGE,
  FAVORITES_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  USER_PROFILE_PAGE,
} from './pathsNames';

const ROUTES = {
  home: { name: 'Beer catalog', url: HOME_PAGE },
  favorites: { name: 'Favorites', url: FAVORITES_PAGE },
  details: { name: 'Beer details', url: DETAILS_PAGE },
  login: { name: 'Login', url: LOGIN_PAGE },
  registration: { name: 'Registration', url: REGISTRATION_PAGE },
  profile: { name: 'Profile', url: USER_PROFILE_PAGE },
};

export default ROUTES;
