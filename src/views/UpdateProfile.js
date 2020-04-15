import React from "react";
import authHOC from "../utils/authHOC";
import Layout from "../common/Layout";

function UpdateProfile(){
    return(
        <>
            <Layout>
                <div className="content py-5">
                    <h2>Actualiza tu perfil</h2>

                </div>
            </Layout>
        </>
    )
}

export default authHOC(UpdateProfile);