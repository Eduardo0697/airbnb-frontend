import React from "react";
import OwlCarousel from "react-owl-carousel";
import PropertyPreview from "./PropertyPreview";
import {Link, useParams} from 'react-router-dom';
import { useMutation } from "react-apollo-hooks";
import gql from 'graphql-tag';

const DELETE_PROPERTY = gql`
    mutation deleteProperty($id:ID!){
        deleteProperty(id:$id)
    }
`;


function PropertiesSlider({name, properties, isEditable}) {
    const [deleteProperty] = useMutation(DELETE_PROPERTY);
    return(
        <>
            <div className="row pt-4">
                <h3>Las propiedades de {name}</h3>
                <div className="col-12 py-4">
                    <OwlCarousel  loop={false} margin={10} nav={false} dots={false}  className="owl-theme" stagePadding={50} items={2}>
                        { properties.map( property => (
                            <div key={property._id} className="item" style={{ height : "300px"}}>
                                <PropertyPreview _id={property._id}
                                                 title={property.title}
                                                 price={property.price}
                                                 location={property.location}
                                                 photos={property.photos}
                                                 isEditable={isEditable}/>
                                { isEditable
                                    ? (
                                        <>
                                        <Link className="btn btn-warning mx-3" to={`/update/property/${property._id}`}>Editar</Link>
                                        <button className="btn btn-danger mx-3"
                                        onClick={
                                            () => {
                                                deleteProperty({variables: {id: property._id}})
                                                    .then( () => {
                                                        window.location.reload();
                                                    })
                                            }
                                        }>Eliminar</button>
                                        </>
                                    )
                                    : (<></>)}

                            </div>
                        ))}
                    </OwlCarousel>
                </div>

            </div>
        </>
    )
}

export default PropertiesSlider;