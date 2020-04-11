import React from "react";

function UserCardInfo({_id, numberReviews, isVerified, name, photo}) {
    return(
      <>
          <div className="card" style={{ top: "10%", position: "sticky" }}>
              <div className="card-body">
                  <img
                      src={photo}
                      alt="..." className="img-fluid rounded"/>
                  <hr/>
                  <div>
                      <ul>
                          <li>{numberReviews} evaluaciones</li>
                          { isVerified ?  <li>Verificado</li> : ''}
                      </ul>
                  </div>
                  <hr/>
                  <div>
                      <h5>{ name } ha proporcionado</h5>
                      <ul>
                          <li>Identificacion Oficial</li>
                          <li>Direccion de correo electronico</li>
                          <li>Numero telefonico</li>
                      </ul>
                  </div>

              </div>
          </div>
      </>
    );
}

export default UserCardInfo;