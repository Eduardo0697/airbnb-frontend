import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Hero from "./Hero";
import NavigationCards from "./NavigationCards";
function LayoutHome({children, background}){
    return(
        <>
            <Navigation isHomeNavigation={true}/>
            <Hero background={background}>
                {children}
            </Hero>
            <NavigationCards/>
            <Footer/>
        </>
    );
}

export default LayoutHome;