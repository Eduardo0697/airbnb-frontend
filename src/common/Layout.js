import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

import NavigationCards from "./NavigationCards";
function Layout({children}){
    return(
        <>
            <Navigation isHomeNavigation={false}/>
            {children}
            <NavigationCards/>
            <Footer/>
        </>
    );
}

export default Layout;