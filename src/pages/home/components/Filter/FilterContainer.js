import { connect } from 'react-redux';
import { filterBeers } from '../../../../redux/actions/beerActions';
import Filter from './Filter';

const mapDispatchToProps = {
  doFilterBeers: filterBeers,
};

export default connect(null, mapDispatchToProps)(Filter);
