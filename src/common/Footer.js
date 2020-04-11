import React from "react";
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <>
            <footer id="footer">
                <div className="footer-top bg-light">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className="footer-info">
                                    <h3>Maxim</h3>
                                    <p>
                                        A108 Adam Street <br/>
                                        NY 535022, USA<br/><br/>
                                        <strong>Phone:</strong> +1 5589 55488 55<br/>
                                        <strong>Email:</strong> info@example.com<br/>
                                    </p>
                                    <div className="social-links mt-3">
                                        <Link className="twitter" to="/"><i className="bx bxl-twitter"/></Link>
                                        <Link className="facebook" to="/"><i className="bx bxl-facebook"/></Link>
                                        <Link className="instagram" to="/"><i className="bx bxl-instagram"/></Link>
                                        <Link className="google-plus" to="/"><i className="bx bxl-skype"/></Link>
                                        <Link className="linkedin" to="/"><i className="bx bxl-linkedin"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"/> <Link  to="/">Home</Link></li>
                                    <li><i className="bx bx-chevron-right"/> <Link  to="/">About us</Link></li>
                                    <li><i className="bx bx-chevron-right"/> <Link  to="/">Services</Link></li>
                                    <li><i className="bx bx-chevron-right"/> <Link  to="/">Terms of service</Link></li>
                                    <li><i className="bx bx-chevron-right"/> <Link  to="/">Privacy policy</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"/> <Link  to="/">Web Design</Link></li>
                                    <li><i className="bx bx-chevron-right"/> <Link  to="/">Web Development</Link></li>
                                    <li><i className="bx bx-chevron-right"/> <Link  to="/">Product Management</Link></li>
                                    <li><i className="bx bx-chevron-right"/> <Link  to="/">Marketing</Link></li>
                                    <li><i className="bx bx-chevron-right"/> <Link  to="/">Page design</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
);
};

export default Footer;