import React from 'react';

export default class WorkFilterItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.handleFilterChange(this.props.name, !this.props.value);
    }
    render() {
        return (
            <li className="md__checkbox">
                <label className="pointer">
                    <input type="checkbox" onChange={this.handleChange} checked={this.props.value}/><span className="md__checkbox-material"><span className="md__checkbox-check"></span></span> {this.props.name}
                </label>
            </li>
        );
    }
}