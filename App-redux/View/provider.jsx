import React, { PropTypes, Component } from 'react';

class Provider extends Component {
    // constructor(props) {
    //     super(props);
    // }

    getChildContext() {
        return {
            store: this.props.store
        };
    }

    render() {
        return (<div>{this.props.children}</div>);
    }
}

Provider.propTypes = {
    store: PropTypes.object.isRequired
}

Provider.childContextTypes = {
    store: PropTypes.object
}

export default Provider;