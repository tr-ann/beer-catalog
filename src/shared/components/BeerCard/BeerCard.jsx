import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Button from '../Button/Button';
import './styles/BeerCard.scss';

export default function BeerCard({ id, image, title, tagline, description, classNames: classes }) {
  const cardClass = classNames('card', classes, {
    'card_more-info': Boolean(description),
  });
  const cardBodyClass = classNames('card__body', { card__body_transparent: Boolean(description) });

  const onFavoriteClick = () => {
    // favorites.push(id)
  };

  let descriptionTag = null;
  if (description) {
    descriptionTag = <p>{description}</p>;
  }

  return (
    <div className={cardClass}>
      <img className="card__image" src={image} alt="Beer" />
      <div className={cardBodyClass}>
        <h3>{title}</h3>
        <p className="tagline">{tagline}</p>
        {descriptionTag}
        <Link to={`/beer/${id}`} className="button">
          open
        </Link>
        <Button onClick={onFavoriteClick}>favorite</Button>
      </div>
    </div>
  );
}
