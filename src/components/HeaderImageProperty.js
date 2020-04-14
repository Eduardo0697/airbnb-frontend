import React from "react";

function HeaderImageProperty({photos}) {
    return(
        <>
            <div style={{ height: "600px"}} className="row py-5">
                <div className="col-12 h-100">
                    <div  className="row h-100 no-gutters">
                        <div className="col-8 h-100">
                            <img
                                style={{ objectFit: "cover" }}
                                src={ photos[0] ? photos[0] : 'https://via.placeholder.com/600'  }
                                alt="PhotoOne" className="img-fluid pr-2 h-100 w-100"/>
                        </div>
                        <div className="col-4 h-100">
                            <div className="row h-100" >
                                <div className="col-12 h-50" >
                                    <img
                                        src={photos[1] ? photos[1] : 'https://via.placeholder.com/600' }
                                        alt="PhotoTwo" style={{ objectFit: "cover" }}
                                        className="img-fluid pb-2 h-100 w-100"/>
                                </div>
                                <div className="col-12 h-50">
                                    <img
                                        src={photos[2] ? photos[2] : 'https://via.placeholder.com/600' }
                                        className="img-fluid h-100 w-100" alt="PhotoThree"
                                        style={{ objectFit: "cover" }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderImageProperty;