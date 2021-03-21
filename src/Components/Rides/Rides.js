import React, {} from 'react';
import { Link } from 'react-router-dom';


const Rides = (props) => {
    const { imageURL, id } = props.ride;

    return (
        <div style={{marginTop:'100px'}} className="col-md-3 container-fluid">
            <Link to={`/destination/${id}`}>
            <div style={{padding:'30px', boxShadow:'8', marginTop:'10px'}} class="card shadow p-3 mb-5 bg-body rounded">
                <img src={imageURL} class="card-img-top" alt="..."/>
            </div>
            </Link>
        </div>
    );
};

export default Rides;