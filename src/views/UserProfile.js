import React from 'react';
import Layout from "../common/Layout";
import {Link} from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Review from "../components/Review";
import UserCardInfo from "../components/UserCardInfo";
import gql from "graphql-tag";
import {useQuery} from "react-apollo-hooks";
import PropertiesSlider from "../components/PropertiesSlider";
import authHOC from "../utils/authHOC";
import ReservationsProfile from "../components/ReservationsProfile";

const ME=gql`
    query me{
        me{
            _id
            first_name
            email
            createdAt
            is_verified
            profile_pic
            description
            reservationsDone{
                _id
                guestNumber
                startDate
                endDate
                property{
                    _id
                    photos
                    price
                    title
                }
            }
            languages
            nationality
            properties{
                _id
                title
                location
                photos
                price
            }
        }
    }
`;

function UserProfile(){
    const {data, loading, error} = useQuery(ME,{
        fetchPolicy: "cache-and-network"
    });

    if(loading) return <Layout><div className="content py-5">Loading...</div></Layout>
    if(error) return <Layout><div className="content py-5">Hubo un error, intenta de nuevo {JSON.stringify(error)}</div></Layout>
    return(
        <>
            <Layout>
                <div className="content py-5">
                    <div className="row">
                        <div className="col-4">
                            <UserCardInfo name={data.me.first_name}
                                          isVerified={data.me.is_verified}
                                          numberReviews={10}
                                          photo={data.me.profile_pic}/> </div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-10">
                                    <h1>Hola, me llamo {data.me.first_name}</h1>
                                    <h5>Se registro en { data.me.createdAt.split(' ')[3] }</h5>
                                </div>
                            </div>
                            <hr/>
                            <div className="row pt-4">
                                <div className="col-12">
                                    <p className="text-justify">{data.me.description}</p>
                                </div>
                                <div className="col-12 mb-3">
                                    <ul>
                                        <li>Habla: {data.me.languages}</li>
                                        <li>Nacionalidad: {data.me.nationality}</li>
                                    </ul>
                                </div>
                                <div className="text-right w-100">
                                    <Link className="btn btn-warning" to="/update/profile">Editar Perfil</Link>
                                </div>

                            </div>
                            <hr/>
                            <PropertiesSlider name={data.me.first_name} properties={data.me.properties} isEditable={true}/>
                            <hr/>
                            <div className="row pt-4">
                                <h3>Evaluaciones</h3>
                                <div className="col-12">
                                    <div className="row">
                                        <Review _id={1} timestamp="Octubre 2018" comment="Excelente ubicacion y atencion"/>
                                        <Review _id={2} timestamp="Marzo 2018" comment="Excelente atencion por parte del anfitrion"/>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row pt-4">
                                <h3>Mis reservaciones</h3>
                                <ReservationsProfile reservations={data.me.reservationsDone}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default authHOC(UserProfile);