import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './styles/BeerCard.scss';

const BeerCard = ({
  doAddFavorite,
  doRemoveFavorite,
  id,
  image,
  title,
  tagline,
  description,
  isFavorite,
  className,
}) => {
  const cardClass = classNames('card', className, {
    'card_more-info': description,
  });
  const cardBodyClass = classNames('card__body', { 'card__body_more-info': description });

  const onFavoriteClick = () => (isFavorite ? doRemoveFavorite(id) : doAddFavorite(id));

  return (
    <div className={cardClass}>
      <img className="card__image" src={image} alt="Beer" />
      <div className={cardBodyClass}>
        <h3>{title}</h3>
        <p className="tagline">{tagline}</p>
        {description && <p>{description}</p>}
        <div className="buttons-container">
          <Link to={`/beer/${id}`}>
            <Button className="card__button">open</Button>
          </Link>
          <Button className="card__button" onClick={onFavoriteClick}>
            {isFavorite ? 'remove favorite' : 'favorite'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;

BeerCard.propTypes = {
  isFavorite: PropTypes.bool,
  doAddFavorite: PropTypes.func.isRequired,
  doRemoveFavorite: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
};

BeerCard.defaultProps = {
  isFavorite: false,
  description: '',
  className: '',
  image: '',
};
