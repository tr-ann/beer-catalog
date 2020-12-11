import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles/PaginationPanel.scss';
import Button from '../Button/Button';

const PaginationPanel = (props) => {
  const { currentPage, pages, onChangePage } = props;

  const handleChangePage = (e) => {
    const page = e.target.value;
    onChangePage(page);
  };

  const getPagesNums = () => {
    const pagesPanel = Array(pages).fill(null);

    return pagesPanel.map((value, index) => {
      const classes = classNames('pagination__button', {
        pagination__button_selected: Number(currentPage) === index,
      });
      return (
        <Button
          type="button"
          key={`$pagination${index + 1}`}
          className={classes}
          value={index}
          onClick={handleChangePage}
        >
          {index + 1}
        </Button>
      );
    });
  };

  return (
    <div className="pagination">
      <Button type="button" className="pagination__button pagination__button_first">
        «
      </Button>
      {getPagesNums()}
      <Button type="button" className="pagination__button pagination__button_last">
        »
      </Button>
    </div>
  );
};

export default PaginationPanel;

PaginationPanel.propTypes = {
  pages: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  currentPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

PaginationPanel.defaultProps = {
  currentPage: 1,
};
