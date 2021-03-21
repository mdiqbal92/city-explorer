import React, { useContext } from 'react';
import { SearchContext } from '../../App';
import people from '../images/peopleicon.png'

const SearchResult = () => {

    const [search, setSearch] = useContext(SearchContext);
    console.log(setSearch);
    return (

        <div style={{ marginTop: '40px' }} className="container">
            <div className="row">
                <div className="col-md-4 justify-content-center">
                    <div className="row">
                        <h3>Your ride is {search.rideType}</h3>
                        <hr />
                        <div style={{border:'1px solid black', margin: '10px'}} className=" d-flex justify-content-between">
                            <div>
                                <img src={search.imageURL} alt="" width="50" height="50" />
                            </div>
                            <div>
                            <img src={people} alt="" width="50" height="50"/><span>4</span>                           
                            </div>
                            <div>
                            <p>$24</p> 
                            </div>
                        </div>
                        <div style={{border:'1px solid black', margin: '10px'}} className=" d-flex justify-content-between">
                            <div>
                                <img src={search.imageURL} alt="" width="50" height="50" />
                            </div>
                            <div>
                            <img src={people} alt="" width="50" height="50"/><span>2</span>                           
                            </div>
                            <div>
                            <p>$14</p> 
                            </div>
                        </div>
                        <div style={{border:'1px solid black', margin: '10px'}} className=" d-flex justify-content-between">
                            <div>
                                <img src={search.imageURL} alt="" width="50" height="50" />
                            </div>
                            <div>
                            <img src={people} alt="" width="50" height="50"/><span>1</span>                           
                            </div>
                            <div>
                            <p>$10</p> 
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-8 d-flex justify-content-end">
                    <img src="https://i.ibb.co/Gx1VdnP/Map.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default SearchResult;