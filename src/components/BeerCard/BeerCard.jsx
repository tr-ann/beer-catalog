import React from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';
import './BeerCard.css';

export default function BeerCard({ image, title, tagline, description, classNames: classes }) {
  const cardClass = classNames('card', classes, {
    'card_more-info': Boolean(description),
  });
  const cardBodyClass = classNames('card-body', { 'card-body_transparent': Boolean(description) });

  const onFavoriteClick = () => {};

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
        {/* <Link to="/beer" className="button">
          open
        </Link> */}
        <Button title="open" />
        <Button title="favorite" onClick={onFavoriteClick} />
      </div>
    </div>
  );
}
