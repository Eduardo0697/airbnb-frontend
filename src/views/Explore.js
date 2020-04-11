import React from 'react';
import gql from 'graphql-tag';
import { useQuery} from "react-apollo-hooks";
import Layout from "../common/Layout";

const ALL_PROPERTIES=gql`
    query getProperties{
        getProperties{
            _id
            title
            price
            location
            photos
        }
    }
`;

function Explore(){
    const {data, loading, error} = useQuery(ALL_PROPERTIES);
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Hubo un error</h1>
    return(
        <Layout>

            {
                data.getProperties.map((property) =>(
                    <>
                        <ul>
                            <li>{property._id}</li>
                            <li>{property.title}</li>
                        </ul>
                    </>


                ))
            }
        </Layout>
    );
};

export default Explore;