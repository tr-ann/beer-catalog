import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../../shared/components/Header/components/PageHeader/PageHeader';
import BeerDetailsContainer from '../BeerDetails/BeerDetailsContainer';
import ROUTES from '../../../../shared/constants/paths/paths';

const DetailsPage = (props) => {
  const { details } = ROUTES;

  const {
    match: {
      params: { id },
    },
  } = props;

  return (
    <>
      <Header currentPage={details.name} />
      <BeerDetailsContainer beerId={Number(id)} />
    </>
  );
};

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};

export default DetailsPage;
