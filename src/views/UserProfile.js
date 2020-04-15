import React from 'react';
import Layout from "../common/Layout";
import {Link, useParams} from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Review from "../components/Review";
import UserCardInfo from "../components/UserCardInfo";
import gql from "graphql-tag";
import {useQuery} from "react-apollo-hooks";
import PropertiesSlider from "../components/PropertiesSlider";
import authHOC from "../utils/authHOC";

const ME=gql`
    query me{
        me{
            _id
            first_name
            password
            email
            profile_pic
            createdAt
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
                                    <p>I love living in Cancun , I love hosting guests and I have won certificates and
                                        titles for excellence for the quality of my rooms and attention to my guests.

                                        I traded Canada (Edmonton) for Cancun when I was 25 because I had a desire to
                                        never have to return to " reality" . It works ,we don’t count down to vacation
                                        anymore and board 20+ planes internationally each year to see new
                                        “ panorámicas”

                                        So we understand and are sympathetic to your stress and expectations .

                                        Our condominium property is out of our control so we often have to work much
                                        harder to ensure guests happiness but I’m almost always touched by the reviews .
                                        The rare time there is a negative aspect in a review I spring to action to
                                        change or even totally remodel the area in order to prevent it from happening
                                        again.

                                        For 15 years I worked in all the top luxury hotels as concierge / guest services
                                        and I learned many things that can help you have a fabulous experience. I'm here
                                        full time, not an absentee owner.

                                        Sincerely , Michelle </p>
                                </div>
                                <div className="col-12">
                                    <ul>
                                        <li>Vive en Cancún, México</li>
                                        <li>Habla English, Español</li>
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
                                        <Review _id={3} timestamp="Febrero 2018" comment="No me gusto el lugar, era inseguro"/>
                                        <Review _id={4} timestamp="Junio 2017" comment="Hospitalidad increible"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default authHOC(UserProfile);