import React from 'react';
import { useLocation} from "react-router-dom";

function Error404(){
    const location = useLocation();
    return(
        <>
            <h1>Not Found! Bad Request 404</h1>
            <h2>No existe la direccion { location.pathname } en el sitio.</h2>
        </>
    )
};

export default Error404;