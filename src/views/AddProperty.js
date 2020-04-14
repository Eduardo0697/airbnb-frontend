import React from "react";
import Layout from "../common/Layout";
import AuthHOC from "./../utils/authHOC";

function AddProperty(props) {
    return(
      <>
          <Layout>
              <div className="content py-5">
                  <h2>Describe tu propiedad</h2>
                  <div className="row p-3">
                      <form>
                          <div className="row">
                              <div className="col-6">
                                  <div className="form-group">
                                      <label >Titulo</label>
                                      <input type="text" className="form-control" placeholder="Villa de lujo" required/>
                                  </div>
                              </div>
                              <div className="col-6">
                                  <div className="form-group">
                                      <label >Ciudad</label>
                                      <input type="text" className="form-control" placeholder="Los cabos" required/>
                                  </div>
                              </div>
                              <div className="col-6">
                                  <div className="form-group">
                                      <label >Direccion</label>
                                      <input type="text" className="form-control" placeholder="Avenida Vicente Guerrero, 5" required/>
                                  </div>
                              </div>
                              <div className="col-6">
                                  <div className="form-group">
                                      <label >Precio por noche</label>
                                      <input type="text" className="form-control" placeholder="850" required/>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <div className="form-group">
                                      <label htmlFor="exampleFormControlTextarea1">Descripcion</label>
                                      <textarea className="form-control" id="exampleFormControlTextarea1"
                                                rows="3" required/>
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
                                                  <label htmlFor="exampleFormControlSelect1">Tipo de Propiedad</label>
                                                  <select className="form-control" id="exampleFormControlSelect1">
                                                      <option>Apartamento entero</option>
                                                      <option>Casa entera</option>
                                                      <option>Habitacion</option>
                                                      <option>Loft</option>
                                                      <option>4</option>
                                                      <option>5</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div className="col-4">
                                              <div className="form-group">
                                                  <label htmlFor="exampleFormControlSelect1">Huespedes</label>
                                                  <select className="form-control" id="exampleFormControlSelect1">
                                                      <option>1</option>
                                                      <option>2</option>
                                                      <option>3</option>
                                                      <option>4</option>
                                                      <option>5</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div className="col-4">
                                              <div className="form-group">
                                                  <label htmlFor="exampleFormControlSelect1">Habitaciones</label>
                                                  <select className="form-control" id="exampleFormControlSelect1">
                                                      <option>1</option>
                                                      <option>2</option>
                                                      <option>3</option>
                                                      <option>4</option>
                                                      <option>5</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div className="col-4">
                                              <div className="form-group">
                                                  <label>Camas</label>
                                                  <select className="form-control" >
                                                      <option>1</option>
                                                      <option>2</option>
                                                      <option>3</option>
                                                      <option>4</option>
                                                      <option>5</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div className="col-4">
                                              <div className="form-group">
                                                  <label>Baños</label>
                                                  <select className="form-control" >
                                                      <option>1</option>
                                                      <option>2</option>
                                                      <option>3</option>
                                                      <option>4</option>
                                                      <option>5</option>
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
                                      <div className="row px-4">
                                          <div className="col-4">
                                              <div className="custom-control custom-checkbox">
                                                  <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                                  <label className="custom-control-label" htmlFor="customCheck1">WiFi</label>
                                              </div>
                                          </div>
                                          <div className="col-4">
                                              <div className="custom-control custom-checkbox">
                                                  <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                                  <label className="custom-control-label" htmlFor="customCheck2">Aire acondicionado</label>
                                              </div>
                                          </div>
                                          <div className="col-4">
                                              <div className="custom-control custom-checkbox">
                                                  <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                                  <label className="custom-control-label" htmlFor="customCheck3">TV</label>
                                              </div>
                                          </div>
                                          <div className="col-4">
                                              <div className="custom-control custom-checkbox">
                                                  <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                                                  <label className="custom-control-label" htmlFor="customCheck4">Piscina</label>
                                              </div>
                                          </div>
                                          <div className="col-4">
                                              <div className="custom-control custom-checkbox">
                                                  <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                                                  <label className="custom-control-label" htmlFor="customCheck5">Estacionamiento</label>
                                              </div>
                                          </div>
                                          <div className="col-4">
                                              <div className="custom-control custom-checkbox">
                                                  <input type="checkbox" className="custom-control-input" id="customCheck7"/>
                                                  <label className="custom-control-label" htmlFor="customCheck7">Lavadora</label>
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
                                                  <div className="col-10 py-2">
                                                      <input type="file" className="form-control-file" required/>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <div className="form-group row">
                                                  <label  className="col-2 col-form-label">Foto 2</label>
                                                  <div className="col-10 py-2">
                                                      <input type="file" className="form-control-file" required />
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <div className="form-group row">
                                                  <label  className="col-2 col-form-label">Foto 3</label>
                                                  <div className="col-10 py-2">
                                                      <input type="file" className="form-control-file" required/>
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