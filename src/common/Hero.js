import React from "react";

function Hero(){
    return(
        <>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="container text-center text-md-left" data-aos="fade-up">
                    <div className="card" style={{width: "40%"}}>
                        <div className="card-body">
                            <h1 className="text-dark">Reserva alojamientos y experiencias únicas.</h1>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputEmail4">Donde</label>
                                        <input type="email" className="form-control" id="inputEmail4"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputllegada">Llegada</label>
                                        <input type="date" className="form-control" id="inputllegada"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputSalida">Salida</label>
                                        <input type="date" className="form-control" id="inputSalida"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="validationCustom04">Huespedes</label>
                                    <select className="custom-select" id="validationCustom04" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div className="form-row justify-content-end">
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-lg text-light "
                                                style={{ "background-color": "#ff5a5f"}}>Buscar
                                        </button>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;