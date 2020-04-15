import React, {useState, useEffect} from "react";
import Layout from "../common/Layout";
import AuthHOC from "./../utils/authHOC";

import Input from "../common/Input";
import useFormProperty from "../hooks/useFormProperty";
import {useMutation, useQuery} from 'react-apollo-hooks';
import gql from 'graphql-tag';

const UPDATE_PROPERTY=gql`
    mutation updateProperty($id: ID! ,$data: PropertyUpdateInput){
        updateProperty(id: $id, data: $data){
            _id
        }
    }
`;

const GET_PROPERTY=gql`
    query getPropertyById($id: ID!){
        getPropertyById(id: $id){
            _id
            title
            price
            address
            location
            photos
            description
            features{
                propertyType
                guests
                rooms
                bathrooms
                beds
            }
            services{
                wifi
                pool
                airConditioner
                tv
                parking
                washingMachine
            }
        }
    }
`;

function UpdateProperty({match, history}) {
    const [ sendProperty ] = useMutation(UPDATE_PROPERTY);
    const [ photo1, setPhoto1 ] = useState('');
    const [ photo2, setPhoto2 ] = useState('');
    const [ photo3, setPhoto3 ] = useState('');
    const [ photoPreview1, setPhotoPreview1 ] = useState('');
    const [ photoPreview2, setPhotoPreview2 ] = useState('');
    const [ photoPreview3, setPhotoPreview3 ] = useState('');
    const [ propertyType, setPropertyType ] = useState('');

    const query = useQuery(GET_PROPERTY, {
        variables: {
            id: match.params.id
        }
    });


    const catchData = async (inputs,feat,services) => {
        delete inputs.photos;
        delete inputs._id;
        //delete feat.propertyType;
        const photos=[photo1,photo2,photo3];
        const features = ( propertyType ? {
            ...feat,
            propertyType : propertyType
        } : {...feat});
        delete inputs.features;
        delete inputs.services;
        const newObject = (photos[0] && photos[1] && photos[2]) ? {...inputs,features,services,photos} : {...inputs,features,services};

        console.log('Objeto formado',newObject);
        const { data, errors} = await sendProperty({variables: { data: {...newObject}, id: match.params.id }});
        if(data){
            history.push('/');
        }
        if(errors) alert('Error al actualizar tu propiedad.');
    };

    const catchPhoto1 = event => {
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onloadend = () => {
            setPhoto1(file);
            setPhotoPreview1(reader.result);
        };
        reader.readAsDataURL(file);
    };
    const catchPhoto2 = event => {
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onloadend = () => {
            setPhoto2(file);
            setPhotoPreview2(reader.result);
        };
        reader.readAsDataURL(file);
    };
    const catchPhoto3 = event => {
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onloadend = () => {
            setPhoto3(file);
            setPhotoPreview3(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const catchTypeProperty = event => {
        const { name, value } = event.target;
        // setPropertyType( field => ({ ...field, [name]: value}));
        setPropertyType(   value);
        console.log('Propiedad',propertyType);
    };

    const {
        feat,
        services,
        inputs,
        handleServiceChange,
        handleFeatureChange,
        handleInputChange,
        handleSubmit,
    } = useFormProperty(catchData, query.data);

    if(query.loading) return <Layout><div className="content py-5"><h2> Cargando...</h2></div></Layout>

    return(
         <Layout>


            <div className="content py-5">
                <h2>Actualiza tu propiedad</h2>
                <div className="row p-3">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <Input
                                    label="Titulo"
                                    type="text"
                                    placeholder="Villa de lujo"
                                    change={handleInputChange}
                                    value={inputs.title}
                                    name="title" required={true}/>
                            </div>
                            <div className="col-6">
                                <Input
                                    label="Ciudad"
                                    type="text"
                                    placeholder="Los Cabos"
                                    change={handleInputChange}
                                    value={inputs.location}
                                    name="location" required={true}/>
                            </div>
                            <div className="col-6">
                                <Input
                                    label="Dirección"
                                    type="text"
                                    placeholder="Avenida Vicente Guerrero, 5"
                                    change={handleInputChange}
                                    value={inputs.address}
                                    name="address" required={true}/>
                            </div>
                            <div className="col-6">
                                <Input
                                    label="Precio por noche"
                                    type="text"
                                    placeholder="850"
                                    change={handleInputChange}
                                    value={inputs.price}
                                    name="price" required={true}/>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label >Descripcion</label>
                                    <textarea
                                        name="description"
                                        className="form-control"
                                        placeholder="Es una fantastica propiedad situada en la orilla del mar..."
                                        value={inputs.description}
                                        onChange={handleInputChange}
                                        rows="10"
                                        cols="30" required={true}/>
                                </div>
                            </div>
                            <div className="row mx-0 px-0 py-3">
                                <div className="col-12">
                                    <h5>Caracteristicas</h5>
                                </div>
                                <div className="col-12">
                                    <div className="row px-4">
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label>Tipo de Propiedad</label>
                                                <select className="form-control"
                                                        value={propertyType}
                                                        onChange={catchTypeProperty}
                                                        name="propertyType" required>
                                                    <option selected disabled value="">Elige...</option>
                                                    <option>Apartamento entero</option>
                                                    <option>Casa entera</option>
                                                    <option>Habitacion</option>
                                                    <option>Loft</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label>Huespedes</label>
                                                <select className="form-control"
                                                        value={feat.guests}
                                                        onChange={handleFeatureChange}
                                                        name="guests">
                                                    <option selected disabled value="">Elige...</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label>Habitaciones</label>
                                                <select className="form-control"
                                                        value={feat.rooms}
                                                        onChange={handleFeatureChange}
                                                        name="rooms">
                                                    <option selected disabled value="">Elige...</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label>Camas</label>
                                                <select className="form-control"
                                                        value={feat.beds}
                                                        onChange={handleFeatureChange}
                                                        name="beds">
                                                    <option selected disabled value="">Elige...</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label>Baños</label>
                                                <select className="form-control"
                                                        value={feat.bathrooms}
                                                        onChange={handleFeatureChange}
                                                        name="bathrooms">
                                                    <option selected disabled value="">Elige...</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-0 px-0 py-3">
                                <div className="col-12">
                                    <h5>Servicios</h5>
                                </div>
                                <div className="col-12">
                                    <div className="row justify-content-around px-4">
                                        <div className="col-4">
                                            <div className="form-group row">
                                                <label className="col-6 col-form-label">Wifi</label>
                                                <div className="col-6">
                                                    <select className="form-control"
                                                            value={services.wifi}
                                                            onChange={handleServiceChange}
                                                            name="wifi">
                                                        <option selected disabled value="">Elige...</option>
                                                        <option value={true}>Si</option>
                                                        <option value={false}>No</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group row">
                                                <label className="col-6 col-form-label">Aire Acondicionado</label>
                                                <div className="col-6">
                                                    <select className="form-control"
                                                            value={services.airConditioner}
                                                            onChange={handleServiceChange}
                                                            name="airConditioner">
                                                        <option selected disabled value="">Elige...</option>
                                                        <option value={true}>Si</option>
                                                        <option value={false}>No</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group row">
                                                <label className="col-6 col-form-label">Tv</label>
                                                <div className="col-6">
                                                    <select className="form-control"
                                                            value={services.tv}
                                                            onChange={handleServiceChange}
                                                            name="tv">
                                                        <option selected disabled value="">Elige...</option>
                                                        <option value={true}>Si</option>
                                                        <option value={false}>No</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group row">
                                                <label className="col-6 col-form-label">Estacionamiento</label>
                                                <div className="col-6">
                                                    <select className="form-control"
                                                            value={services.parking}
                                                            onChange={handleServiceChange}
                                                            name="parking">
                                                        <option selected disabled value="">Elige...</option>
                                                        <option value={true}>Si</option>
                                                        <option value={false}>No</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group row">
                                                <label className="col-6 col-form-label">Piscina</label>
                                                <div className="col-6">
                                                    <select className="form-control"
                                                            value={services.pool}
                                                            onChange={handleServiceChange}
                                                            name="pool">
                                                        <option selected disabled value="">Elige...</option>
                                                        <option value={true}>Si</option>
                                                        <option value={false}>No</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group row">
                                                <label className="col-6 col-form-label">Lavadora</label>
                                                <div className="col-6">
                                                    <select className="form-control"
                                                            value={services.washingMachine}
                                                            onChange={handleServiceChange}
                                                            name="washingMachine">
                                                        <option selected disabled value="">Elige...</option>
                                                        <option value={true}>Si</option>
                                                        <option value={false}>No</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-0 px-0 py-3">
                                <div className="col-12 mb-3">
                                    <h5>Fotos de tu propiedad</h5>
                                    <small>En caso de querer actualizar, debes actualizar todas!</small>
                                </div>
                                <div className="col-12 ">
                                    <div className="row px-4">
                                        <div className="col-12">
                                            <div className="form-group row">
                                                <label  className="col-2 col-form-label">Foto 1</label>
                                                <div className="col-5 py-2">
                                                    <input type="file"
                                                           name="photo1"
                                                           onChange={catchPhoto1}
                                                           className="form-control-file"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group row">
                                                <label  className="col-2 col-form-label">Foto 2</label>
                                                <div className="col-5 py-2">
                                                    <input type="file"
                                                           name="photo2"
                                                           onChange={catchPhoto2}
                                                           className="form-control-file"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group row">
                                                <label  className="col-2 col-form-label">Foto 3</label>
                                                <div className="col-5 py-2">
                                                    <input type="file"
                                                           name="photo3"
                                                           onChange={catchPhoto3}
                                                           className="form-control-file"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-4">
                                                    {
                                                        query.data.getPropertyById.photos[0]
                                                            ? (<>
                                                                <figure>
                                                                    <img src={ query.data.getPropertyById.photos[0] } alt="Fotografia 1" style={{  objectFit: "cover", height: "200px"}} className="figure-img rounded d-block w-100" />
                                                                    <figcaption className="figure-caption text-right">Fotografia Actual </figcaption>
                                                                </figure>
                                                                </>)
                                                            : (<></>)
                                                    }
                                                    <figure className="figure w-100">
                                                        { photoPreview1
                                                            ? (<>
                                                                <img src={photoPreview1} alt="Fotografia 1" style={{  objectFit: "cover", height: "200px"}} className="figure-img rounded d-block w-100" />
                                                                <figcaption className="figure-caption text-right">Nueva fotografia </figcaption>
                                                            </>)
                                                            : (<></>)}

                                                    </figure>
                                                 </div>
                                                <div className="col-4">
                                                    {
                                                        query.data.getPropertyById.photos[1]
                                                            ? (<>
                                                                <figure>
                                                                    <img src={ query.data.getPropertyById.photos[1] } alt="Fotografia 2" style={{  objectFit: "cover", height: "200px"}} className="figure-img rounded d-block w-100" />
                                                                    <figcaption className="figure-caption text-right">Fotografia Actual </figcaption>
                                                                </figure>
                                                            </>)
                                                            : (<></>)
                                                    }
                                                    <figure className="figure w-100">
                                                        { photoPreview2
                                                            ? (<>
                                                                <img src={photoPreview2} alt="Fotografia 2" style={{  objectFit: "cover", height: "200px"}} className="figure-img rounded d-block w-100" />
                                                                <figcaption className="figure-caption text-right">Nueva fotografia </figcaption>
                                                            </>)
                                                            : (<></>)}

                                                    </figure>
                                                </div>
                                                <div className="col-4">
                                                    {
                                                        query.data.getPropertyById.photos[2]
                                                            ? (<>
                                                                <figure>
                                                                    <img src={ query.data.getPropertyById.photos[2] } alt="Fotografia 3" style={{  objectFit: "cover", height: "200px"}} className="figure-img rounded d-block w-100" />
                                                                    <figcaption className="figure-caption text-right">Fotografia Actual </figcaption>
                                                                </figure>
                                                            </>)
                                                            : (<></>)
                                                    }
                                                    <figure className="figure w-100">
                                                        { photoPreview3
                                                            ? (<>
                                                                <img src={photoPreview3} alt="Fotografia 3" style={{  objectFit: "cover", height: "200px"}} className="figure-img rounded d-block w-100" />
                                                                <figcaption className="figure-caption text-right">Nueva fotografia </figcaption>
                                                            </>)
                                                            : (<></>)}

                                                    </figure>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-auto ">
                                <button type="submit" style={{backgroundColor : "#ff5a5f"}}
                                        className="btn btn-block btn-lg text-white">Actualizar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </Layout>
    )

}

export default UpdateProperty;