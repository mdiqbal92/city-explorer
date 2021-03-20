import React from 'react';
import Rides from '../Rides/Rides';

const Home = () => {
    const rides = [
        {
            id: '1',
            rideType: 'Bike',
            imageURL: 'https://i.ibb.co/qBtnGN6/Frame.png'
        }, {
            id: '2',
            rideType: 'Car',
            imageURL: 'https://i.ibb.co/wWGDk2m/Frame-2.png'

        }, {
            id: '3',
            rideType: 'Bus',
            imageURL: 'https://i.ibb.co/ZdCPgr8/Frame-1.png'

        }, {
            id: '4',
            rideType: 'Metro',
            imageURL: 'https://i.ibb.co/MMWwCFb/Group.png'

        }]
    return (
        <div className ="container">
            <div className="row">
                {
                    rides.map(ride => <Rides ride={ride}></Rides>)
                }
            </div>
        </div>

    );
};

export default Home;