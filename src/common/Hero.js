import React from "react";

function Hero({children, background}){
    return(
        <>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: `url('${background}')` } }>
                <div className="container" data-aos="fade-up">
                    {children}
                </div>
            </section>
        </>
    );
};

export default Hero;