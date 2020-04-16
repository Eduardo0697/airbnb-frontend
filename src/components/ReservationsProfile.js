import React from "react";
import {Link} from "react-router-dom";

function ReservationsProfile({reservations}){
    return(
        <>
            <div className="col-12">
                <div className="row">
                    {
                        reservations
                            ? (
                                <>
                                    { reservations.map(  reserve =>
                                        (
                                            <>
                                                <div className="col-12">
                                                    <div className="card mb-3" style={{ height : "210px"}}>
                                                        <div className="row no-gutters">
                                                            <div className="col-md-5 d-flex">
                                                                <img
                                                                    src={reserve.property.photos[0]}
                                                                    className="card-img" alt="Property" style={{ objectFit : "cover", maxHeight : "210px"}}/>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <div className="card-body">
                                                                    <h6 className="card-title">Información Reservacion</h6>
                                                                    <ul className="list-unstyled">
                                                                        <li className="ml-3"> {reserve.property.title}</li>
                                                                        <li className="ml-3">Fecha de inicio: {reserve.startDate}</li>
                                                                        <li className="ml-3">Fecha de termino: {reserve.endDate}</li>
                                                                        <li className="ml-3">Numero de huespedes: {reserve.guestNumber}</li>
                                                                        <li className="ml-3">Costo total: { reserve.guestNumber * reserve.property.price}.00 MXN</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <Link className="stretched-link" to={`/property/${reserve.property._id}`}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    )}
                                </>
                            )
                            : (<h6>Aun no cuentas con ninguna reservacion</h6>)
                    }
                </div>
            </div>
        </>
    )
}

export default ReservationsProfile;