import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';

const Rides = (props) => {
    const { imageURL, rideType } = props.ride;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const goToDestination = () =>{
        history.replace(from);
    }

    return (
        <div onClick = {goToDestination} className="col-md-3">
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