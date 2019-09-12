import React from 'react';
import './Results.css';
import BriefInfo from './BriefInfo';
import FullInfo from './FullInfo';

class Results extends React.Component {
    render() {
        const res = this.props.response
        console.log(res)
        const resultsListItem = res.map((resp, i) => {
            return (
                <li 
                    className = 'listItem'
                    key = {i}> 
                    <BriefInfo 
                        key = {i}
                        response = {resp}/>
                    <FullInfo 
                        key = {resp.id}
                        response = {resp}/>
                </li>
            )
        })
        
        return (
            <ul className = 'resultsList'>
                {resultsListItem}
            </ul>
        )
    }
}

export default Results;