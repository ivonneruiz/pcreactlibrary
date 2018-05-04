import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

class PCPutton extends Component {
    render() {
        const { children } = this.props;
        return React.createElement(
            Button,
            { variant: 'raised' },
            children
        );
    }
}

PCPutton.propTypes = {
    children: PropTypes.node
};

export default PCPutton;