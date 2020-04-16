import React from "react";

function PropertyDescription({hostUser,features,services, description}){
    return(
        <>
            <div className="row">
                <div className="col-10">
                    <h2>{`${features.propertyType} - Anfitrion ${hostUser.first_name}`}</h2>
                    <h5>{`${features.guests} huéspedes · ${features.rooms} habitaciones · ${features.beds} camas · ${features.bathrooms} baños completos`}</h5>
                </div>
                <div className="col-2">
                    <a href="#hostUserDescription">
                        <img
                            src={hostUser.profile_pic}
                            alt="..." className="img-fluid rounded-circle"/>
                    </a>
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
                    <ul className="list-unstyled">
                        <li>
                            <p className="font-weight-bold mb-1">Alojamiento entero</p>
                            <p className="ml-2">Dispondrás de toda la vivienda (casa) para ti.</p>
                        </li>
                        <li>
                            <p className="font-weight-bold mb-1">Impecable</p>
                            <p className="ml-2">11 huéspedes recientes han dicho que este alojamiento está impecable.</p>
                        </li>
                        <li>
                            <p className="font-weight-bold mb-1">Ubicación fantástica</p>
                            <p className="ml-2">El 90 % de los últimos huéspedes han valorado con 5 estrellas la ubicación.</p>
                        </li>
                        <li>
                            <p className="font-weight-bold mb-1">Fantástico proceso de llegada</p>
                            <p className="ml-2">El 90 % de los últimos huéspedes han valorado con 5 estrellas el proceso de
                            llegada.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="row pt-4">
                <h3>Descripcion</h3>
                <div className="col-12">
                    {description
                        ? (<p className="text-justify">{description }</p>)
                        : (<p>Lo lamentamos, el propietario no ha provisto una descripcion del lugar</p>)
                    }

                </div>

            </div>
        </>
    )
}

export default PropertyDescription;