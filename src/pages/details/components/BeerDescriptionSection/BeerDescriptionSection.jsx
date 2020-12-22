import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles/BeerDescriptionSection.scss';
import Button from '../../../../shared/components/Button/Button';

const BeerDescriptionSection = ({
  doAddFavorite,
  doRemoveFavorite,
  favorites,
  beer,
  className,
}) => {
  if (!beer) return null;

  const isFavorite = favorites.includes(beer.id || 0);

  const onFavoriteClick = () => (isFavorite ? doRemoveFavorite(beer.id) : doAddFavorite(beer.id));

  const sectionClass = classNames('description-section', className);
  const { name, tagline, description, image_url: image } = beer;

  return (
    <div className={sectionClass}>
      <div className="description-section__body">
        <h1 className="body__name">{name}</h1>
        <span className="body__tagline">{tagline}</span>
        <Button isBright onClick={onFavoriteClick} className="body__button">
          {isFavorite ? 'remove from favorite' : 'add to favorite'}
        </Button>
        <span className="body__description">{description}</span>
      </div>
      <img className="description-section__image" src={image} alt="Beer" />
    </div>
  );
};

export default BeerDescriptionSection;

BeerDescriptionSection.propTypes = {
  doAddFavorite: PropTypes.func.isRequired,
  doRemoveFavorite: PropTypes.func.isRequired,
  beer: PropTypes.objectOf(PropTypes.object),
  favorites: PropTypes.arrayOf(PropTypes.number),
  className: PropTypes.string,
};

BeerDescriptionSection.defaultProps = {
  beer: null,
  favorites: [],
  className: '',
};
