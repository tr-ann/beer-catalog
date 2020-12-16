import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles/PaginationPanel.scss';
import Button from '../Button/Button';

const PaginationPanel = (props) => {
  const { currentPage, pages, onChangePage } = props;

  const handleChangePage = (e) => {
    const page = e.target.value;
    onChangePage(Number(page));
  };

  const setNextPage = () => {
    onChangePage(currentPage + 1);
  };

  const setPreviousPage = () => {
    onChangePage(currentPage - 1);
  };

  const getPagesNums = () => {
    const pagesPanel = Array(pages).fill(null);

    return pagesPanel.map((value, index) => {
      const classes = classNames('pagination__button', {
        pagination__button_selected: currentPage === index,
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
      <Button
        type="button"
        className="pagination__button pagination__button_first"
        onClick={setPreviousPage}
        isDisabled={currentPage < 1}
      >
        «
      </Button>
      {getPagesNums()}
      <Button
        type="button"
        className="pagination__button pagination__button_last"
        onClick={setNextPage}
        isDisabled={currentPage > pages - 2}
      >
        »
      </Button>
    </div>
  );
};

export default PaginationPanel;

PaginationPanel.propTypes = {
  pages: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
};

PaginationPanel.defaultProps = {
  currentPage: 1,
};
