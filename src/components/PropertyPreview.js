
import React from 'react';
import { Link } from 'react-router-dom';

function PropertyPreview({_id, title, location, price}){
    return(
        <>
            <div className="card border-0 mb-4">
                <img
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    className="card-img-top" alt="..." />
                <div className="card-body p-2">
                    <p className="card-text">
                        {location}
                        <br/>
                        {title}
                        <br/>
                        <b>${price} MXN</b> por noche
                    </p>
                </div>
                <Link className="stretched-link" to={`property/${_id}`}/>
            </div>
        </>
    );
};

export default PropertyPreview;