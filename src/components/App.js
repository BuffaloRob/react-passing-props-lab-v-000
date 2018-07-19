import React, { Component } from 'react'

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

    componentDidMount() {
      this.fetchFilters();
      this.fetchFruit();
    }

    fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(res => res.json())
        .then(filters => this.setState({ filters }));
    }

    fetchFruit = () => {
      fetch('/api/fruit')
        .then(res => res.json())
        .then(fruit => this.setState({ fruit }));
    }

    updateFilter = event => {
      console.log('update filter to: ', event.target.value);
      this.setState({ currentFilter: event.target.value });
    }

  render() {
    return (
        <FruitBasket 
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        onUpdateFilter={this.updateFilter}
        />
    )
  }
}

export default App;
