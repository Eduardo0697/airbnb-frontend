import React from 'react';
import { useParams} from 'react-router-dom';
import Layout from "../common/Layout";
import { useQuery } from "react-apollo-hooks";
import gql from 'graphql-tag';

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
            }
            
        }
    }
`;


function Property(){
    const { id } = useParams();
    const { data, loading, error } = useQuery(ONE_Property, {
        variables: { id }
    });

    if(loading) return <Layout><div className="row py-5">Loading...</div></Layout>
    if(error) return <Layout>"Hubo un error, intenta de nuevo</Layout>
    return(
        <Layout>
            <div className="row py-5">
                {data.getPropertyById.photos.map(photo =>
                    ( <img className="img-fluid w-25" src={photo} />)
                )}
                <ul>
                    <li>{data.getPropertyById.title}</li>
                    <li>{data.getPropertyById.price}</li>
                    <li>{data.getPropertyById.location}</li>
                    <li>{data.getPropertyById.photos}</li>
                    <li>{data.getPropertyById.hostUser._id}</li>
                    <li>{data.getPropertyById.hostUser.first_name}</li>
                    <li>{data.getPropertyById.hostUser.last_name}</li>
                </ul>
            </div>
        </Layout>
    )

}

export default Property;