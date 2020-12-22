import { connect } from 'react-redux';
import { getBeerInfo } from '../../../../redux/actions/beerActions';
import { selectBeerInfo, selectIsLoading } from '../../../../redux/selectors/beersSelector';
import BeerDetails from './BeerDetails';

const mapStateToProps = (state) => ({
  beer: selectBeerInfo(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = {
  doGetBeerInfo: getBeerInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerDetails);
