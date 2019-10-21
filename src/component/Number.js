import React from 'react';

class Number extends React.Component {
    constructor() {
        super();
        this.state = { number: 0 };
    }

    render() {
        return(
            <div>
                <button onClick={() => 
                    this.setState({number: this.state.number + 2})
                    }>
                    hello world
                </button> 
                number: {this.state.number}
            </div>
        );
    }
}

export default Number;