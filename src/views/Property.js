import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Layout from "../common/Layout";
import { useQuery } from "react-apollo-hooks";
import gql from 'graphql-tag';
import HeaderImageProperty from "../components/HeaderImageProperty";
import PropertyDescription from "../components/PropertyDescription";
const ONE_Property=gql`
    query getOne($id:ID!){
        getPropertyById(id:$id){
            title
            price
            address
            location
            photos
            hostUser{
                _id
                first_name
                last_name
                profile_pic
            }
            reviews{
                _id
                comment
                createdAt
                user{
                    _id
                    first_name
                    profile_pic

                }
            }
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


function Property(){
    const { id } = useParams();
    const { data, loading, error } = useQuery(ONE_Property, {
        variables: { id },
        fetchPolicy: "cache-and-network"
    });

    if(loading) return <Layout><div className="content py-5">Loading...</div></Layout>
    if(error) return <Layout>"Hubo un error, intenta de nuevo</Layout>
    return(
        <Layout>
            <div className="content py-5">
                <div className="row ">
                    <div className="col-12">
                        <h2>{data.getPropertyById.title}</h2>
                        <h3>{data.getPropertyById.location}</h3>
                    </div>
                </div>

                <HeaderImageProperty photos={data.getPropertyById.photos}/>

                <div className="row">
                    <div className="col-8">
                        <PropertyDescription hostUser={data.getPropertyById.hostUser}
                                             features={data.getPropertyById.features}
                                             services={data.getPropertyById.services}/>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ top: "10%", position: "sticky"}}>
                            <div className="card-body">
                                <h5 className="text-dark">${data.getPropertyById.price} MXN / noche</h5>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputllegada">Llegada</label>
                                            <input type="date" className="form-control" id="inputllegada"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputSalida">Salida</label>
                                            <input type="date" className="form-control" id="inputSalida"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="validationCustom04">Huespedes</label>
                                        <select className="custom-select" id="validationCustom04" required>
                                            <option selected disabled value="">Choose...</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                    <div className="form-row ">
                                        <div className="col">
                                            <button type="submit" className="btn btn-lg btn-block text-light "
                                                    style={{ backgroundColor: "#ff5a5f" }}>Reservar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <hr/>
                <div className="row pt-4">
                    <h3>Evalauciones</h3>
                    <div className="col-12">
                        <div className="row">
                            <div className="review col-6 py-4 my-3">
                                <div className="row">
                                    <div className="col-2">
                                        <a href="#">
                                            <img
                                                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                                alt="..." className="img-fluid rounded-circle"/>
                                        </a>
                                    </div>
                                    <div className="col-6">Uriel <br/> Noviembre 2016</div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        La casa es preciosa, Vanessa fue muy hospitalaria, nos hubiera gustado
                                        quedarnos más días, muy recomendable
                                    </div>
                                </div>
                            </div>
                            <div className="review col-6 py-4 my-3">
                                <div className="row">
                                    <div className="col-2">
                                        <a href="#">
                                            <img
                                                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                                alt="..." className="img-fluid rounded-circle"/>
                                        </a>
                                    </div>
                                    <div className="col-6">Uriel <br/> Noviembre 2016</div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        La casa es preciosa, Vanessa fue muy hospitalaria, nos hubiera gustado
                                        quedarnos más días, muy recomendable
                                    </div>
                                </div>
                            </div>
                            <div className="review col-6 py-4 my-3">
                                <div className="row">
                                    <div className="col-2">
                                        <a href="#">
                                            <img
                                                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                                alt="..." className="img-fluid rounded-circle"/>
                                        </a>
                                    </div>
                                    <div className="col-6">Uriel <br/> Noviembre 2016</div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        La casa es preciosa, Vanessa fue muy hospitalaria, nos hubiera gustado
                                        quedarnos más días, muy recomendable
                                    </div>
                                </div>
                            </div>
                            <div className="review col-6 py-4 my-3">
                                <div className="row">
                                    <div className="col-2">
                                        <a href="#">
                                            <img
                                                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                                alt="..." className="img-fluid rounded-circle"/>
                                        </a>
                                    </div>
                                    <div className="col-6">Uriel <br/> Noviembre 2016</div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        La casa es preciosa, Vanessa fue muy hospitalaria, nos hubiera gustado
                                        quedarnos más días, muy recomendable
                                    </div>
                                </div>
                            </div>
                            <div className="review col-6 py-4 my-3">
                                <div className="row">
                                    <div className="col-2">
                                        <a href="#">
                                            <img
                                                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                                alt="..." className="img-fluid rounded-circle"/>
                                        </a>
                                    </div>
                                    <div className="col-6">Uriel <br/> Noviembre 2016</div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        La casa es preciosa, Vanessa fue muy hospitalaria, nos hubiera gustado
                                        quedarnos más días, muy recomendable
                                    </div>
                                </div>
                            </div>
                            <div className="review col-6 py-4 my-3">
                                <div className="row">
                                    <div className="col-2">
                                        <a href="#">
                                            <img
                                                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                                alt="..." className="img-fluid rounded-circle"/>
                                        </a>
                                    </div>
                                    <div className="col-6">Uriel <br/> Noviembre 2016</div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        La casa es preciosa, Vanessa fue muy hospitalaria, nos hubiera gustado
                                        quedarnos más días, muy recomendable
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr/>
                <div className="row pt-4">
                    <div className="col-12">
                        <div className="row py-5">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-3">
                                        <a href="#">
                                            <img
                                                src="https://images.unsplash.com/photo-1582971805810-b24306e0afe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                                alt="..." className="img-fluid rounded-circle"/>
                                        </a>
                                    </div>
                                    <div className="col-9">
                                        <h5>Anfitrion: Michelle</h5>
                                        <h7>Se registro en abril 2019</h7>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6">
                                        <h6>Description</h6>
                                        <p>I love living in Cancun , I love hosting guests and I have won
                                            certificates and titles for excellence for the quality of my rooms
                                            and attention to my guests. I traded Canada (Edmonton) for Cancun
                                            when I was 25 because I had a desire to never have to return to "
                                            reality" . It works ,we don’t count down to vacation anymore and
                                            board 20+ planes internationally each year to see new “ panorámicas”
                                            So we understand and are sympathetic to your stress and expectations
                                            . Our condominium property is out of our control so we often have to
                                            work much harder to ensure guests happiness but I’m almost always
                                            touched by the reviews . The rare time there is a negative aspect in
                                            a review I spring to action to change or even totally remodel the
                                            area in order to prevent it from happening again. For 15 years I
                                            worked in all the top luxury hotels as concierge / guest services
                                            and I learned many things that can help you have a fabulous
                                            experience. I'm here full time, not an absentee owner. Sincerely ,
                                            Michelle</p>
                                    </div>

                                    <div className="col-6">
                                        <ul>
                                            <li>Idiomas: English, Español</li>
                                            <li>Índice de respuesta: 97%</li>
                                            <li>Tiempo de respuesta: en menos de una hora</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )

}

export default Property;