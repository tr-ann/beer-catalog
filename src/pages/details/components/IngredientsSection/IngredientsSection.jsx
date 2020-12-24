import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../../../shared/components/Section/Section';
import './styles/IngredientsSection.scss';

const IngredientsSection = ({ ingredients }) => {
  const getMalt = () => {
    const maltList = ingredients.malt.map((item) => {
      const {
        name,
        amount: { value, unit },
      } = item;
      return <div key={name + value}>{`"${name}" - ${value} ${unit}`}</div>;
    });
    return (
      <Section isSmall title="Malt">
        {maltList}
      </Section>
    );
  };

  const getHops = () => {
    const hopsList = ingredients.hops.map((item) => {
      const {
        name,
        amount: { value, unit },
        add,
      } = item;
      return <div key={name + value + add}>{`"${name}" - ${value} ${unit}, add when ${add}`}</div>;
    });
    return (
      <Section isSmall title="Hops">
        {hopsList}
      </Section>
    );
  };

  const getYeast = () => {
    const { yeast } = ingredients;

    return (
      <Section isSmall title="Yeast">
        {yeast}
      </Section>
    );
  };

  return (
    ingredients && (
      <Section isBordered title="Ingredients" className="ingredients-section">
        {getMalt()}
        {getHops()}
        {getYeast()}
      </Section>
    )
  );
};

export default IngredientsSection;

IngredientsSection.propTypes = {
  ingredients: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object), PropTypes.string])
  ),
};

IngredientsSection.defaultProps = {
  ingredients: null,
};
