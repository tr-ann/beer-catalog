import { connect } from 'react-redux';
import { addFavoriteBeer, removeFavoriteBeer } from '../../../../redux/actions/beerActions';
import { selectFavoritesIds } from '../../../../redux/selectors/beersSelector';
import BeerDescriptionSection from './BeerDescriptionSection';

const mapStateToProps = (state) => ({
  favorites: selectFavoritesIds(state),
});

const mapDispatchToProps = {
  doAddFavorite: addFavoriteBeer,
  doRemoveFavorite: removeFavoriteBeer,
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerDescriptionSection);
