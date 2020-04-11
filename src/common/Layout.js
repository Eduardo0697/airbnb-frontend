import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

import NavigationCards from "./NavigationCards";
function Layout({children}){
    return(
        <>
            <Navigation isHomeNavigation={false}/>
            <main id="main">
                <div className="container" >
                    <div style={{ padding : "60px" }}>
                        {children}
                    </div>
                </div>
            </main>
            <NavigationCards/>
            <Footer/>
        </>
    );
}

export default Layout;