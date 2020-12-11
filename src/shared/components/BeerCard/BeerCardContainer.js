import { connect } from 'react-redux';
import { addFavoriteBeer } from '../../../redux/actions/beerActions';
import BeerCard from './BeerCard';

const mapDispatchToProps = {
  doAddFavorite: addFavoriteBeer,
};

export default connect(null, mapDispatchToProps)(BeerCard);
