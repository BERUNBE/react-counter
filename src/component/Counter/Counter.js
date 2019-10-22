import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 };
    }

    render() {
        return(
            <div>
                <button onClick={() => 
                    this.setState({counter: this.state.counter + 1})
                    }>
                    <h2>+</h2>
                </button> 
                <button onClick={() => 
                    this.setState({counter: this.state.counter - 1})
                    }>
                    <h2>-</h2>
                </button> 
                counter: {this.state.counter}
            </div>
        );
    }
}

export default Counter;