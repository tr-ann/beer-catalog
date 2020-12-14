import { connect } from 'react-redux';
import { getFavoriteBeer } from '../../../../redux/actions/beerActions';
import { selectFavorites, selectIsLoading } from '../../../../redux/selectors/beersSelector';
import withPagination from '../../../../shared/components/PaginationWrapper/PaginationWrapper';
import FavoriteBeers from './FavoriteBeers';

const mapStateToProps = (state) => ({
  data: selectFavorites(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = {
  doLoadData: getFavoriteBeer,
};

export default connect(mapStateToProps, mapDispatchToProps)(withPagination(FavoriteBeers));
