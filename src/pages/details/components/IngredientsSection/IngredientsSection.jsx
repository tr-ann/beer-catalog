import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../../../shared/components/Section/Section';

export default function IngredientsSection({ ingredients }) {
  const getMalt = () => {
    const maltList = ingredients.malt.map((item) => {
      const {
        name,
        amount: { value, unit },
      } = item;
      return <div key={name + value}>{`"${name}" - ${value} ${unit}`}</div>;
    });
    return <Section title="malt">{maltList}</Section>;
  };

  const getHops = () => {
    const hopsList = ingredients.hops.map((item) => {
      const {
        name,
        amount: { value, unit },
        add,
      } = item;
      return <div key={name + value}>{`"${name}" - ${value} ${unit}, add when ${add}`}</div>;
    });
    return <Section title="hops">{hopsList}</Section>;
  };

  const getYeast = () => {
    const { yeast } = ingredients;

    return <Section title="yeast">{yeast}</Section>;
  };

  return ingredients ? (
    <Section>
      {getMalt()}
      {getHops()}
      {getYeast()}
    </Section>
  ) : null;
}

IngredientsSection.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.object),
};

IngredientsSection.defaultProps = {
  ingredients: null,
};
