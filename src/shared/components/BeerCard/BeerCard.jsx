import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './styles/BeerCard.scss';

const BeerCard = ({
  doAddFavorite,
  id,
  image,
  title,
  tagline,
  description,
  favorite,
  className,
}) => {
  const cardClass = classNames('card', className, {
    'card_more-info': description,
  });
  const cardBodyClass = classNames('card__body', { 'card__body_more-info': description });

  const onFavoriteClick = () => {
    doAddFavorite(id);
  };

  return (
    <div className={cardClass}>
      <img className="card__image" src={image} alt="Beer" />
      <div className={cardBodyClass}>
        <h3>{title}</h3>
        <p className="tagline">{tagline}</p>
        {description && <p>{description}</p>}
        <div className="buttons-container">
          <Link to={`/beer/${id}`}>
            <Button>open</Button>
          </Link>
          <Button onClick={onFavoriteClick}>{favorite ? 'remove favorite' : 'favorite'}</Button>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;

BeerCard.propTypes = {
  favorite: PropTypes.bool,
  doAddFavorite: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
};

BeerCard.defaultProps = {
  favorite: false,
  description: '',
  className: '',
  image: '',
};
