import { connect } from 'react-redux';
import { searchBeers } from '../../../../redux/actions/beerActions';
import Search from './Search';

const mapDispatchToProps = {
  doSearchBeers: searchBeers,
};

export default connect(null, mapDispatchToProps)(Search);
