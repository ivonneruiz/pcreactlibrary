import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

class PCPutton extends Component {
    render() {
        const { children } = this.props;
        return (
            <Button variant="raised">
                {children}
            </Button>
        );
    }
}

PCPutton.propTypes = {
    children: PropTypes.node
};

export default PCPutton;