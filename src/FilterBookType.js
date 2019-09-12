import React from 'react';
import './FilterBookType.css';

class FilterBookType extends React.Component {
    
    render() {
        return (
            <select 
                className = 'bookType'
                value = {this.props.book}
                onChange = {e => this.props.bookTypeChange(e.target.value)}>
                <option value = 'null'></option>
                <option value = 'free-ebooks'>free-ebooks</option>
                <option value = 'paid-ebooks'>paid-ebooks</option>
                <option value = 'ebooks'>ebooks</option>      
            </select>
        )
    }
}

export default FilterBookType;