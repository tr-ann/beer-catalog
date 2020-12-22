import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../../../shared/components/Section/Section';

const MethodSection = ({ method }) => {
  const getMash = () => {
    const mash = method.mash_temp?.map((item) => {
      const {
        duration,
        temp: { value, unit },
      } = item;
      return <div key={value}>{`${duration} minutes at ${value} ${unit}`}</div>;
    });
    return (
      <Section isSmall title="Mash">
        {mash}
      </Section>
    );
  };

  const getFermentation = () => {
    if (!method.fermentation) {
      return null;
    }

    const {
      temp: { value, unit },
    } = method.fermentation;
    const fermentation = <div key={value}>{`Permorm at ${value} ${unit}`}</div>;

    return (
      <Section isSmall title="Fermentation">
        {fermentation}
      </Section>
    );
  };

  const getTwist = () => {
    const { twist } = method;
    return twist ? (
      <Section isSmall title="Twist">
        {twist}
      </Section>
    ) : null;
  };

  return method ? (
    <Section title="Method">
      {getMash()}
      {getFermentation()}
      {getTwist()}
    </Section>
  ) : null;
};

export default MethodSection;

MethodSection.propTypes = {
  method: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object), PropTypes.string])
  ),
};

MethodSection.defaultProps = {
  method: {},
};
