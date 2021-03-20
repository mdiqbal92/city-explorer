import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Rides = (props) => {
    const { imageURL, rideType, id } = props.ride;



    return (
        
        <div className="col-md-3 container-fluid">
            <Link to={`/destination/${id}`}>
            <div class="card">
                <img src={imageURL} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{rideType}</h5>
                    </div>
            </div>
            </Link>
        </div>
        
        
    );
};

export default Rides;