import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Hero from "./Hero";
import NavigationCards from "./NavigationCards";
function LayoutHome(){
    return(
        <>
            <Navigation isHomeNavigation={true}/>
            <Hero/>
            <NavigationCards/>
            <Footer/>

        </>
    );
}

export default LayoutHome;