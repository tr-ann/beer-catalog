import { connect } from 'react-redux';
import { setFavoriteBeers } from '../../../redux/actions/beerActions';
import LoginPage from './LoginPage';

const mapDispatchToProps = {
  doSetFavorites: setFavoriteBeers,
};

export default connect(null, mapDispatchToProps)(LoginPage);
