import React from 'react';
import './header.css';
import {Container,Row,Col} from 'react-bootstrap';

const Header = () =>{
    return(
        <section className="hero" style={{background:'url(../img/hero-bg.png) center no-repeat'}}>
            <Container>
                <Row>
                    <Col>
                        <h1>Names Of God</h1>
                        <h2>Here are the names of God and thier bible references</h2>
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}


export default Header;