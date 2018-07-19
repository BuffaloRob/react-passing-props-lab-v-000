import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, filters, currentFilter, onUpdateFilter }) => 
  <div className="fruit-basket">
    <Filter 
      filters={filters}
      handleChange={onUpdateFilter} />
    <FilteredFruitList
      fruit={fruit}
      filter={currentFilter} />
  </div>;

  FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    currentFilter: null,
    updateFilterCallback: () => {}
  };

export default FruitBasket;

// class FruitBasket extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }

//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     old way
//     this.setState({ selectedFilter: event.target.value });
//     this.props.onFilterChange(event.target.value);
//   }

//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.props.selectedFilter} />
//       </div>
//     );
//   }
// }