import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {SearchContext} from '../../App'


const Rides = (props) => {
    const { imageURL } = props.ride;
    const history = useHistory();
    const [search, setSearch] = useContext(SearchContext)
    setSearch(props.ride);

    const handleRide = () =>{
        history.push('/destination')
        setSearch(props.ride);
    }

    return (
        <div style={{marginTop:'10px'}} className="col-md-3 container-fluid">
            <div onClick= {handleRide} style={{padding:'30px', boxShadow:'8'}} class="card shadow p-3 mb-5 bg-body rounded">
                <img src={imageURL} class="card-img-top" alt="..."/>
            </div>
        </div>
    );
};

export default Rides;