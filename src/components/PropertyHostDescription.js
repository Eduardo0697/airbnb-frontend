import React from "react";
import {Link} from "react-router-dom";

function PropertyHostDescription({hostUser}){
    return(
        <div className="row pt-4" id="hostUserDescription">
            <div className="col-12">
                <div className="row py-5">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <Link to={`/user/${hostUser._id}`}>
                                    <img
                                        src={hostUser.profile_pic}
                                        alt="..." className="img-fluid rounded-circle"/>
                                </Link>
                            </div>
                            <div className="col-9">
                                <h5>Anfitrion: {hostUser.first_name}</h5>
                                <h6>Se registro en {hostUser.createdAt.split(' ')[3]}</h6>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <h6>Acerca de mi...</h6>
                                { hostUser.description ? (<p className="text-justify">{hostUser.description}</p>) : (<><p>El usuario no ha terminado su descripcion</p></>)}

                            </div>

                            <div className="col-6">
                                <ul>
                                    <li>Idiomas: {hostUser.languages}</li>
                                    <li>Nacionalidad: {hostUser.nationality}</li>
                                    <li>Índice de respuesta: 97%</li>
                                    <li>Tiempo de respuesta: en menos de una hora</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default PropertyHostDescription;