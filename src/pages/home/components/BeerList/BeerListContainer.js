import { connect } from 'react-redux';
import { getBeerList } from '../../../../redux/actions/beerActions';
import withInfiniteScroll from '../../../../shared/components/InfiniteScrollWrapper/InfiniteScrollWrapper';
import {
  selectBeers,
  selectError,
  selectIsLoading,
} from '../../../../redux/selectors/beersSelector';
import BeerList from './BeerList';

const mapStateToProps = (state) => ({
  beers: selectBeers(state),
  error: selectError(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = {
  doLoadData: getBeerList,
};

export default connect(mapStateToProps, mapDispatchToProps)(withInfiniteScroll(BeerList));
