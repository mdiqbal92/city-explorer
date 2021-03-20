import React from 'react';

const Rides = (props) => {
    const { imageURL, rideType } = props.ride;
    return (
        <div className="col-md-3">
            <div class="card">
                <img src={imageURL} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{rideType}</h5>
                    </div>
            </div>
        </div>
    );
};

export default Rides;