import { connect } from 'react-redux';
import { getBeerList } from '../../../../redux/actions/beerActions';
import Search from './Search';

const mapDispatchToProps = {
  doSearchBeers: getBeerList,
};

export default connect(null, mapDispatchToProps)(Search);
