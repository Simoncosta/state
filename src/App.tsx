import { Component, useState } from 'react'

class App extends Component {

  constructor(props: any) {
    super(props);

    this.state = {
      name: "Simon",
      count: 0,
    }

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let state = this.state;
    state.count = state.count + 1;

    // setState é uma função do REACT para atualizar a state
    this.setState(state);

  }

  decrease() {
    let state = this.state;
    state.count = state.count - 1;

    // setState é uma função do REACT para atualizar a state
    this.setState(state);
  }

  render() {
    return (
      <div>
        Meu nome é: {this.state.name} e vou demonstrar um contador:
        <h1>Contador</h1>
        <button onClick={this.decrease}>-</button>
        {this.state.count}
        <button onClick={this.increase}>+</button>
      </div>
    );
  }

}

export default App
