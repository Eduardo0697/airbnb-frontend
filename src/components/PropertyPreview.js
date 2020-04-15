
import React from 'react';
import { Link } from 'react-router-dom';

function PropertyPreview({_id, title, location, price, photos,isEditable}){
    return(
        <>
            <div className="card border-0 mb-4 " style={{ height: "75%"}}>
                <img
                    src={ photos[0] ? photos[0] : 'https://via.placeholder.com/600'  }
                    className="card-img-top" alt="..." style={{ height: "60%"}} />
                <div className="card-body p-2">
                    <p className="card-text">
                        {location}
                        <br/>
                        {title}
                        <br/>
                        <b>${price} MXN</b> por noche
                    </p>
                </div>
                <Link className="stretched-link" to={`/property/${_id}`}/>

            </div>

        </>
    );
};

export default PropertyPreview;