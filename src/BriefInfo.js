import React from 'react';
import './BriefInfo.css';

class BriefInfo extends React.Component {
    render() {
        let res = this.props.response
        return (
            <div className = 'briefInfo'>
                <img className = 'thumbnail'
                    src = {res.volumeInfo.imageLinks.thumbnail}
                    alt = "thumbnail of this book's cover."/>
                <div className = 'info'>
                    <h3>{res.volumeInfo.title}</h3>
                    <p>Author: {res.volumeInfo.authors}</p>  
                    <p>Price: {res.saleInfo.listPrice ? res.saleInfo.listPrice.amount : "No sale price listed."}</p>  
                    <p>{res.volumeInfo.description ? res.volumeInfo.description : "No description available."}</p>
                </div>
            </div>
        )
    }
}

export default BriefInfo;