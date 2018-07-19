import React, { Component } from 'react';
import Filter from './Filter';

const FilteredFruitList = ({ fruit, filter }) => {
  const fruitList = !filter ? fruit : fruit.filter(item => item.fruit_type === filter);

  return (
    <ul className="fruit-list">
      {fruitList.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  );
};

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};

export default FilteredFruitList;

// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: []
//     };
//   }

//   componentDidMount() {
//     fetch('/api/fruit')
//       .then(response => response.json())
//       .then(items => this.setState({ items }));
//   }

//   render() {
//     const list = !this.props.filter || this.props.filter === 'all' ? this.props.items : this.props.items.filter(i => i.fruit_type === this.props.filter);

//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );
//   }
// }