import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterCon className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact Us</h4>
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
                        <div className="col-md-3 col-sm-6">
                            <h4>text text</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">text</a></li>
                                <li><a href="/">text</a></li>
                                <li><a href="/">text</a></li>
                                <li><a href="/">text</a></li>
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
    background: var(--gradient);
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
