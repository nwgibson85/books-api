import React from 'react';
import './FilterPrintType.css';

class FilterPrintType extends React.Component {
    render() {
        return (
            <select  
                className = 'printType'
                value = {this.props.print}
                onChange = {(e) => this.props.printTypeChange(e.target.value)}>      
                <option value = 'all'>all</option>
                <option value = 'books'>books</option>    
                <option value = 'magazine'>magazine</option>
            </select>
        )
    }
}

export default FilterPrintType;