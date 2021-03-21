import React from 'react';
import Rides from '../Rides/Rides';
import RideData from '../Data/Data.json'

const Home = () => {
    return (
        <div className ="container">
            <div className="row">
            <h2 style = {{textAlign:'center'}}>Select your Ride First</h2>
                {
                    RideData.map(ride => <Rides ride={ride}></Rides>)
                }
            </div>
        </div>
    );
};

export default Home;