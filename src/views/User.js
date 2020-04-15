import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Layout from "../common/Layout";
import { useQuery } from "react-apollo-hooks";
import gql from 'graphql-tag';
import HeaderImageProperty from "../components/HeaderImageProperty";
import UserCardInfo from "../components/UserCardInfo";
import OwlCarousel from "react-owl-carousel";
import PropertyPreview from "../components/PropertyPreview";
import Review from "../components/Review";
import PropertiesSlider from "../components/PropertiesSlider";

const ONE_USER=gql`
    query getOne($id:ID!){
        getUserById(id:$id){
            _id
            first_name
            email
            createdAt
            is_verified
            profile_pic
            description
            languages
            nationality
            properties{
                _id
                title
                price
                address
                location
                photos
            }
        }
    }
`;


function User(){
    const { id } = useParams();
    const { data, loading, error } = useQuery(ONE_USER, {
        variables: { id }
    });


    if(loading) return <Layout><div className="content py-5">Loading...</div></Layout>
    if(error) return <Layout>"Hubo un error, intenta de nuevo</Layout>
    return(
        <Layout>
            <div className="content py-5">
                <div className="row">
                    <div className="col-4">
                        <UserCardInfo name={data.getUserById.first_name}
                                      isVerified={data.getUserById.is_verified}
                                      numberReviews={10}
                                      photo={data.getUserById.profile_pic}/>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-10">
                                <h1>Hola, me llamo {data.getUserById.first_name}</h1>
                                <h5>Se registro en { data.getUserById.createdAt.split(' ')[3] }</h5>
                            </div>
                        </div>
                        <hr/>
                        <div className="row pt-4">
                            <div className="col-12">
                                <p>{ data.getUserById.description}</p>
                            </div>
                            <div className="col-12">
                                <ul>
                                    <li>Habla: {data.getUserById.languages}</li>
                                    <li>Nacionalidad: {data.getUserById.nationality}</li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        <PropertiesSlider name={data.getUserById.first_name} properties={data.getUserById.properties} isEditable={false}/>
                        <hr/>
                        <div className="row pt-4">
                            <h3>Evaluaciones</h3>
                            <div className="col-12">
                                <div className="row">
                                    <Review _id={1} timestamp="Octubre 2018" comment="Excelente ubicacion y atencion"/>
                                    <Review _id={2} timestamp="Marzo 2018" comment="Excelente atencion por parte del anfitrion"/>
                                    <Review _id={3} timestamp="Febrero 2018" comment="No me gusto el lugar, era inseguro"/>
                                    <Review _id={4} timestamp="Junio 2017" comment="Hospitalidad increible"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default User;