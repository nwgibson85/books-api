import React from 'react';
import './FullInfo.css';

class FullInfo extends React.Component { 
    render() {
        let res = this.props.response;
        const display = res.volumeInfo.infoLink 
            ? <a href = {res.volumeInfo.infoLink} target = "_blank">{res.volumeInfo.title} full information page</a>
            : <div className="infoLink_placeholder">Sorry but there is not a link for further inforamtion provided.</div>;
        return (
            <div 
                className = 'fullInfo-box'>
                    {display}
            </div>
        )
    } 
}

export default FullInfo;