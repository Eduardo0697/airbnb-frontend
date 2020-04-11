import React from 'react';
import Layout from "../common/Layout";
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import PropertyPreview from "../components/PropertyPreview";
import Review from "../components/Review";
import UserCardInfo from "../components/UserCardInfo";

function UserProfile(){
    return(
        <>
            <Layout>
                <div className="content py-5">
                    <div className="row">
                        <div className="col-4">
                            <UserCardInfo name="Michelle"
                                          isVerified={true}
                                          numberReviews={10}
                                          photo="https://images.unsplash.com/photo-1582971805810-b24306e0afe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-10">
                                    <h1>Hola, me llamo Michelle</h1>
                                    <h5>Se registro en 2011</h5>
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
                            </div>
                            <hr/>
                            <div className="row pt-4">
                                <h3>Las propiedades de Michelle</h3>
                                <div className="col-12 py-4">
                                    <OwlCarousel  loop={true} margin={10} nav={true}  className="owl-theme">
                                        <div className="item">
                                            <PropertyPreview _id={1} title="Casa en el lago" price="350" location="Cuernavaca"/>
                                        </div>
                                        <div className="item">
                                            <PropertyPreview _id={2} title="Departamento nuevo" price="300" location="Guadalajara"/>
                                        </div>
                                        <div className="item">
                                            <PropertyPreview _id={3} title="Loft de lujo" price="370" location="Toluca"/>
                                        </div>
                                        <div className="item">
                                            <PropertyPreview _id={4} title="Casa en la playa" price="850" location="Cancun"/>
                                        </div>
                                    </OwlCarousel>
                                </div>

                            </div>
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

export default UserProfile;