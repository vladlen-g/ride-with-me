import React, { PropTypes } from 'react';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../../constants/filters';
require('./Footer.scss');

const propTypes = {
  filter: PropTypes.string,
  onClearCompleted: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

const filters = [SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE];
const filterTitles = {
  [SHOW_ALL]: "All",
  [SHOW_COMPLETED]: "Completed",
  [SHOW_ACTIVE]: "Active",
}

function Footer({ filter, onClearCompleted, onFilterChange }) {
  return (
    <div className="footer">
      <div className="filter">
        {filters.map(item =>
          <div
            className={"filterItem" + (item === filter ? " selected" : "")}
            key={item}
            onClick={onFilterChange.bind(null, item)}
          >
            {filterTitles[item]}
          </div>
        )}
      </div>

      <button
        className="clearCompleted"
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </div>
  )
}

Footer.propTypes = propTypes;

export default Footer;
