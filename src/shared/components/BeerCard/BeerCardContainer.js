import { connect } from 'react-redux';
import { addFavoriteBeer, removeFavoriteBeer } from '../../../redux/actions/beerActions';
import BeerCard from './BeerCard';

const mapDispatchToProps = {
  doAddFavorite: addFavoriteBeer,
  doRemoveFavorite: removeFavoriteBeer,
};

export default connect(null, mapDispatchToProps)(BeerCard);
