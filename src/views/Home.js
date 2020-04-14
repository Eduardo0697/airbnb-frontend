import React from 'react';
import LayoutHome from "../common/LayoutHome";

function Home(){
    return(
        <>
            <LayoutHome background="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" >
               <div className="row justify-content-center justify-content-md-start">
                   <div className="card" style={{width: "380px"}}>
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
                                       <option disabled value="">Choose...</option>
                                       <option>1</option>
                                       <option>2</option>
                                       <option>3</option>
                                       <option>4</option>
                                   </select>
                               </div>
                               <div className="form-row justify-content-end">
                                   <div className="col-auto">
                                       <button type="submit" className="btn btn-lg text-light "
                                               style={{ "backgroundColor": "#ff5a5f"}}>Buscar
                                       </button>
                                   </div>
                               </div>


                           </form>
                       </div>
                   </div>
               </div>
            </LayoutHome>
        </>
    );
};

export default Home;