import React from "react";
import {Link} from "react-router-dom";

function Review({_id, comment, timestamp}){
    return(
      <>
          <div className="review col-12 py-4 my-3">
              <div className="row my-2">
                  <div className="col-2">
                      <Link to="#">
                          <img
                              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                              alt="..." className="img-fluid rounded-circle"/>
                      </Link>
                  </div>
                  <div className="col-10">Uriel <br/> {timestamp}</div>
              </div>
              <div className="row py-2">
                  <div className="col-12">
                      {comment}
                  </div>
              </div>
          </div>
      </>
    );
}

export default Review;