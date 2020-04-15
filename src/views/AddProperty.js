import React, {useState} from "react";
import Layout from "../common/Layout";
import AuthHOC from "./../utils/authHOC";

import Input from "../common/Input";
import useFormProperty from "../hooks/useFormProperty";
import {useMutation, UseMutation} from 'react-apollo-hooks';
import gql from 'graphql-tag';

const CREATE_PROPERTY=gql`
    mutation createOneProperty($data: PropertyCreateInput){
        createProperty(data: $data){
            _id
            title
        }
    }
`;

function AddProperty({history}) {

    const [sendProperty] = useMutation(CREATE_PROPERTY);
    const [ photo1, setPhoto1 ] = useState('');
    const [ photo2, setPhoto2 ] = useState('');
    const [ photo3, setPhoto3 ] = useState('');
    const [ photoPreview1, setPhotoPreview1 ] = useState('');
    const [ photoPreview2, setPhotoPreview2 ] = useState('');
    const [ photoPreview3, setPhotoPreview3 ] = useState('');
    const [ propertyType, setpropertyType ] = useState('');

    const catchData = async (inputs,feat,services) => {
        // console.log('Inputs componente', inputs);
        // console.log('Features componente', features);
        // console.log('Services componente', services);
        const photos=[photo1,photo2,photo3];
        const features = {
            ...feat,
            ...propertyType
        };
        const object={
            ...inputs,
            features,
            services,
            photos
        };
        console.log('Objeto formado',object);
        const { data, errors} = await sendProperty({variables: { data: {...object }}});
        if(data){
            history.push('/properties');
        }
        if(errors) alert('Error al registrar tu propiedad.');
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
        event.persist();
        const { name, value } = event.target;
        //setpropertyType( field => ({ ...field, [name]: value}));
        setpropertyType(value);
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
    } = useFormProperty(catchData);

    return(
      <>
          <Layout>
              <div className="content py-5">
                  <h2>Describe tu propiedad</h2>
                  <div className="row p-3">
                      <form onSubmit={handleSubmit}>
                          <div className="row">
                              <div className="col-6">
                                  <Input
                                      label="Titulo"
                                      type="text"
                                      placeholder="Villa de lujo"
                                      required={true}
                                      change={handleInputChange}
                                      value={inputs.title}
                                      name="title"/>
                              </div>
                              <div className="col-6">
                                  <Input
                                      label="Ciudad"
                                      type="text"
                                      placeholder="Los Cabos"
                                      required={true}
                                      change={handleInputChange}
                                      value={inputs.location}
                                      name="location"/>
                              </div>
                              <div className="col-6">
                                  <Input
                                      label="Dirección"
                                      type="text"
                                      placeholder="Avenida Vicente Guerrero, 5"
                                      required={true}
                                      change={handleInputChange}
                                      value={inputs.address}
                                      name="address"/>
                              </div>
                              <div className="col-6">
                                  <Input
                                      label="Precio por noche"
                                      type="text"
                                      placeholder="850"
                                      required={true}
                                      change={handleInputChange}
                                      value={inputs.price}
                                      name="price"/>
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
                                          cols="30"
                                          required/>
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
                                                          name="guests" required>
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
                                                          name="rooms" required>
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
                                                          name="beds" required>
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
                                                          name="bathrooms" required>
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
                                                              name="wifi" required>
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
                                                              name="airConditioner" required>
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
                                                              name="tv" required>
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
                                                              name="parking" required>
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
                                                              name="pool" required>
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
                                                              name="washingMachine" required>
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
                                  <div className="col-12">
                                      <h5>Fotos de tu propiedad</h5>
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
                                                             className="form-control-file"
                                                             required/>
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
                                                             className="form-control-file"
                                                             required/>
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
                                                             className="form-control-file"
                                                             required/>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="col-12">
                                              <div className="row">
                                                  <div className="col-4">
                                                      <img src={photoPreview1} alt="Fotografia 1" style={{  objectFit: "cover", height: "300px"}} className="d-block w-100" />
                                                  </div>
                                                  <div className="col-4">
                                                      <img src={photoPreview2} alt="Fotografia 2" style={{  objectFit: "cover", height: "300px"}} className="d-block w-100" />
                                                  </div>
                                                  <div className="col-4">
                                                      <img src={photoPreview3} alt="Fotografia 3" style={{  objectFit: "cover", height: "300px"}} className="d-block w-100" />
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
                                          className="btn btn-block btn-lg text-white">Crear
                                  </button>
                              </div>
                          </div>
                      </form>
                  </div>

              </div>
          </Layout>

      </>
    );
}

export default AuthHOC(AddProperty);