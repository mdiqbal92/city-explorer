import React from 'react';
import Rides from '../Rides/Rides';
import RideData from '../Data/Data.json'

const Home = () => {
    return (
        <div className ="container">
            <div className="row">
                {
                    RideData.map(ride => <Rides ride={ride}></Rides>)
                }
            </div>
        </div>

    );
};

export default Home;