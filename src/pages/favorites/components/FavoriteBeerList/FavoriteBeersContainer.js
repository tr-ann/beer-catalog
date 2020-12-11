import { connect } from 'react-redux';
import { getFavoriteBeer } from '../../../../redux/actions/beerActions';
import { selectBeers, selectIsLoading } from '../../../../redux/selectors/beersSelector';
import withPagination from '../../../../shared/components/PaginationWrapper/PaginationWrapper';
import FavoriteBeers from './FavoriteBeers';

const mapStateToProps = (state) => ({
  beers: selectBeers(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = {
  doLoadData: getFavoriteBeer,
};

export default connect(mapStateToProps, mapDispatchToProps)(withPagination(FavoriteBeers));
