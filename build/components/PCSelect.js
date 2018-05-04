import React, { Component } from 'react';
import Select from 'material-ui/Select';
import { withStyles } from 'material-ui/styles';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import PropTypes from 'prop-types';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120
    }
});

class PCSelect extends Component {
    render() {
        const { options, value, id, classes, label } = this.props;
        let menuItems = [React.createElement(
            MenuItem,
            { value: '', key: '0' },
            React.createElement(
                'em',
                null,
                'None'
            )
        )];
        if (this.props.options !== undefined && this.props.options !== null && this.props.options.length > 0) {
            menuItems.push(options.map((item, index) => React.createElement(
                MenuItem,
                { value: item.value, key: item.value },
                item.description
            )));
        }
        return React.createElement(
            FormControl,
            { className: classes.formControl },
            React.createElement(
                InputLabel,
                { htmlFor: id },
                label
            ),
            React.createElement(
                Select,
                {
                    value: value,
                    inputProps: {
                        name: id,
                        id: id
                    }
                },
                menuItems
            )
        );
    }
}

PCSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(styles)(PCSelect);