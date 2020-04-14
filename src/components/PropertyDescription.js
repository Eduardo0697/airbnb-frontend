import React from "react";
import {Link} from "react-router-dom";

function PropertyDescription({hostUser,features,services}){
    return(
        <>
            <div className="row">
                <div className="col-10">
                    <h2>{`${features.propertyType} - Anfitrion ${hostUser.first_name}`}</h2>
                    <h5>{`${features.guests} huéspedes · ${features.rooms} habitaciones · ${features.beds} camas · ${features.bathrooms} baños completos`}</h5>
                </div>
                <div className="col-2">
                    <Link to={`/user/${hostUser._id}`}>
                        <img
                            src={hostUser.profile_pic}
                            alt="..." className="img-fluid rounded-circle"/>
                    </Link>
                </div>
            </div>
            <hr/>
            <div className="row pt-4">
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li className={services.wifi ? '' :'text-muted list-strike'}>
                                    <i className='bx bx-wifi pr-3'/>Conexión Wifi
                                </li>
                                <li className={services.airConditioner ? '' :'text-muted list-strike'}>
                                    <i className='bx bx-wind pr-3'/>Aire Acondicionado
                                </li>
                                <li className={services.tv ? '' :'text-muted list-strike'}>
                                    <i className='bx bx-tv pr-3'/>Television
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li className={services.parking ? '' :'text-muted list-strike'}>
                                    <i className='bx bxs-parking pr-3'/>Estacionamiento
                                </li>
                                <li className={services.washingMachine ? '' :'text-muted list-strike'}>
                                    <i className='bx bxs-washer pr-3'/>Lavadora
                                </li>
                                <li className={services.pool ? '' :'text-muted list-strike'}>
                                    <i className='bx bx-swim pr-3' />Piscina
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <hr/>
            <div className="row pt-4">
                <div className="col-12">
                    <ul>
                        <li>
                            Alojamiento entero
                            Dispondrás de toda la vivienda (casa) para ti.
                        </li>
                        <li>
                            Impecable
                            11 huéspedes recientes han dicho que este alojamiento está impecable.
                        </li>
                        <li>
                            Alojamiento entero
                            Dispondrás de toda la vivienda (casa) para ti.
                        </li>
                        <li>
                            Ubicación fantástica
                            El 90 % de los últimos huéspedes han valorado con 5 estrellas la ubicación.
                        </li>
                        <li>
                            Fantástico proceso de llegada
                            El 90 % de los últimos huéspedes han valorado con 5 estrellas el proceso de
                            llegada.
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="row pt-4">
                <h3>Descripcion</h3>
                <div className="col-12">
                    <p>
                        The world famous Seashell house is a gated property .
                        Your concierge is available next door to help you with tips and tricks
                        You will have a private pool, two king beds , kitchenette and BBQ and entire
                        property, both shells . In shell wifi, air conditioning.
                        ***If you have 5,6 people we have constructed a third shell with a king bed
                        and full bath for an additional $99 per night.
                        Enjoy the rare interior like a celebrity as passers by will seek to look in
                        with intrigued expressions.

                        El alojamiento
                        My dear friends Raquel and Eduardo Ocampo designed and built the Seashell
                        House and for many years no one knew that it was possible to stay here and
                        fewer knew how to arrange a stay.
                        I decided it was too special to keep to myself and I invited the world via
                        AIRBNB !!!
                        Raquel and daughter Vane are your hosts at this unique island paradise .

                    </p>
                </div>

            </div>
        </>
    )
}

export default PropertyDescription;