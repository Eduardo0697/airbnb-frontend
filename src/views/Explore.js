import React from 'react';
import gql from 'graphql-tag';
import { useQuery} from "react-apollo-hooks";
import Layout from "../common/Layout";
import PropertyPreview from "../components/PropertyPreview";

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
    const {data, loading, error} = useQuery(ALL_PROPERTIES,{
        fetchPolicy: 'no-cache'
    });
    return(
        <Layout>
            <div className="content py-5">
            <h3>Encuentra el lugar perfecto para ti!</h3>
                <div className="row mt-5">

                {
                    loading
                        ? <h1>Loading</h1>
                        : (error
                            ? <h1>Error :( {error}</h1>
                            : data.getProperties.map((property) =>(
                                <div className="col-3" style={{ height: "300px" }} key={property._id}>
                                    <PropertyPreview
                                        _id={property._id}
                                        location={property.location}
                                        price={property.price}
                                        title={property.title}
                                        photos={property.photos}/>
                                </div>
                            ))
                        )
                }
            </div>
            </div>
        </Layout>
    );
};

export default Explore;