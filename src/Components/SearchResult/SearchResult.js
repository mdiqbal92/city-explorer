import React from 'react';

const SearchResult = (props) => {
    
    const {rideType, imageURL} = props.search;
    return (
        <div className="col-md-3">
            <p>{rideType}</p>
            <img src={imageURL} alt=""/> 
        </div>
    );
};

export default SearchResult;