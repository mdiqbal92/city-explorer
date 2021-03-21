import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RideData from '../Data/Data.json'
import SearchResult from '../SearchResult/SearchResult';

const Destination = () => {
    const {id} = useParams();
    // const [destination, setDestination] = useState({});

    // useEffect(()=>{
    //     setDestination(RideData);
    // }
    // ,[id]);
    const handleSearch = () => {
        console.log("Searched Clicked")
    }
    return (
        <div className="row container">
            
                <div className=" d-flex justify-content-center">
                <div >
                    <div style={{ margin: '40px'}} className="col-md-4">
                    <form onSubmit={handleSearch}>
                    <label htmlFor="pick-from">Pick From</label>
                    <input shadow p-3 mb-5 bg-body rounded name="pick-from" type="text"/>
                    <br/><br/>
                    <label htmlFor="pick-to">Drop at</label>
                    <input shadow p-3 mb-5 bg-body rounded name="pick-to" type="text"/>
                    <br/><br/>
                    <input className = "btn btn-success" type="submit" value="Search"/>
                    </form>
                    </div>

                    <div>
                        <div className = "row">
                        {/* <SearchResult></SearchResult> */}
                        </div>
                    </div>
                </div>
                
                <div style={{ margin: '40px'}} className="col-md-3">
                    <img src="https://i.ibb.co/Gx1VdnP/Map.png" alt=""/>
                </div>
                </div>
            
            
        </div>
    );
};

export default Destination;