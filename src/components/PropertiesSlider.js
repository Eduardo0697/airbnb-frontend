import React from "react";
import OwlCarousel from "react-owl-carousel";
import PropertyPreview from "./PropertyPreview";

function PropertiesSlider({name, properties}) {
    return(
        <>
            <div className="row pt-4">
                <h3>Las propiedades de {name}</h3>
                <div className="col-12 py-4">
                    <OwlCarousel  loop={false} margin={10} nav={true}  className="owl-theme">
                        { properties.map( property => (
                            <div className="item" style={{ height : "300px"}}>
                                <PropertyPreview _id={property._id}
                                                 title={property.title}
                                                 price={property.price}
                                                 location={property.location}
                                                 photos={property.photos}/>
                            </div>
                        ))}

                        {/*<div className="item">*/}
                        {/*    <PropertyPreview _id={2} title="Departamento nuevo" price="300" location="Guadalajara"/>*/}
                        {/*</div>*/}
                        {/*<div className="item">*/}
                        {/*    <PropertyPreview _id={3} title="Loft de lujo" price="370" location="Toluca"/>*/}
                        {/*</div>*/}
                        {/*<div className="item">*/}
                        {/*    <PropertyPreview _id={4} title="Casa en la playa" price="850" location="Cancun"/>*/}
                        {/*</div>*/}
                    </OwlCarousel>
                </div>

            </div>
        </>
    )
}

export default PropertiesSlider;