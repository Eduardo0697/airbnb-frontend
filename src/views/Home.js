import React from 'react';
import LayoutHome from "../common/LayoutHome";
import Navigation from "../common/Navigation";
import Hero from "../common/Hero";

import gql from 'graphql-tag';
import { useQuery} from "react-apollo-hooks";


function Home(){
    return(
        <>
            <LayoutHome/>
        </>
    );
};

export default Home;