import React from 'react';

const Destination = () => {
    return (
        <div className="row container">
            
                <div className=" d-flex justify-content-center">
                <div className="col-md-3">
                    <form action="">
                    <label htmlFor="pick-from"></label>
                    <input name="pick-from" type="text" placeholder="pick from"/>
                    <br/><br/>
                    <label htmlFor="pick-to"></label>
                    <input name="pick-to" type="text" placeholder="pick to"/>
                    <br/><br/>
                    <input type="button" value="Search"/>
                    
                    </form>


                </div>
                <div className="col-md-4">
                    <img src="https://i.ibb.co/Gx1VdnP/Map.png" alt=""/>
                </div>
                </div>
            
            
        </div>
    );
};

export default Destination;