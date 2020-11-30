import { connect } from 'react-redux';
import { getBeerList } from '../../../../redux/actions/beerActions';
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
  doGetBeerList: getBeerList,
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
