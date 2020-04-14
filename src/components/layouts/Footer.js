import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <FooterCon className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Subscribe</h4>
                            <ul className="list-unstyled">
                                <li>text</li>
                                <li>text</li>
                                <li>text</li>
                                <li>text</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>text text</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">text</a></li>
                                <li><a href="/">text</a></li>
                                <li><a href="/">text</a></li>
                                <li><a href="/">text</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 footer">
                            <h4>Socials</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://www.facebook.com/marko.vitkovicbojka"><i className="fab fa-facebook-square pr-2"></i>Facebook</a></li>
                                <li><a href="https://twitter.com/hunte_ghost"><i className="fab fa-twitter-square pr-2"></i>Twitter</a></li>
                                <li><a href="https://github.com/MarkoVitkovic"><i className="fab fa-github-square pr-2"></i>GitHub</a></li>
                                <li><a href="https://outlook.live.com/owa/"><i className="fas fa-envelope-square pr-2"></i>Email</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 footer">
                            <h4>Subscribe</h4>
                            <div className="footer-text">
                                <p>Get 20% off at our hotels and food.</p>
                                <input type="email" className="form-control" required placeholder="Enter email"></input>
                                <p>
                                    I want emails from Nova Gradiska with travel and product information, promotions, advertisements, third-party offers, and surveys. I can unsubscribe any time using the unsubscribe link at the end of all emails. 
                                    <a href="/contactus"> Contact Us here.</a>
                                </p>
                                <Link to="/subscribe"><button type="button" className="btn btn-outline-primary pr-5 pl-5 rounded-pill">Subscribe Here</button></Link>
                            </div>
                        </div>
                    </div>
                <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Nova Gradiska - All Rights Reserved
                        </p>
                </div>
                </div>
            </div>
        </FooterCon>
    )
}
const FooterCon = styled.footer`
.footer-middle{
    background: white;
    padding-top: 3rem;
    color: var(--dark);
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 1rem;
}
ul li a{
    color: var(--dark);
}
ul li a:hover{
    color:var(--mainGray);
    text-decoration: none;
}
`;
