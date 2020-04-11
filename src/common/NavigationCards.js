import React from "react";

function NavigationCards(){
    return(
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="py-5">
                        <h2>Descubre que tenemos para ti.</h2>
                    </div>

                    <div className="row">
                        <div className="col-6 col-md-4">
                            <div className="card mb-3" style={{"max-width" : "540px"}}>
                                <div className="row no-gutters">
                                    <div className="col-md-5">
                                        <img
                                            src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                            className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">Estancias</h5>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="stretched-link"></a>
                            </div>
                        </div>

                        <div className="col-6 col-md-4">
                            <div className="card mb-3" style={{"max-width" : "540px"}}>
                                <div className="row no-gutters">
                                    <div className="col-md-5">
                                        <img
                                            src="https://images.unsplash.com/photo-1571043492538-ff6fce8b2f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                            className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">Experiencias</h5>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="stretched-link"></a>
                            </div>
                        </div>

                        <div className="col-6 col-md-4">
                            <div className="card mb-3" style={{"max-width" : "540px"}}>
                                <div className="row no-gutters">
                                    <div className="col-md-5">
                                        <img
                                            src="https://images.unsplash.com/photo-1459231978203-b7d0c47a2cb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
                                            className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">Aventuras</h5>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="stretched-link"></a>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </>
    );
}

export default NavigationCards;