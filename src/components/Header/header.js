import React from 'react';
import './header.css';

import {Container,Row,Col} from 'react-bootstrap';

import bg from './hero-bg.png'

const Header = () =>{
    
    return(
        <section className="hero" style={{background:`url(${bg}) center no-repeat`}}>
            <Container>
                <Row>
                    <Col>
                        <h1>Names Of God</h1>
                        <h2>Interesting Names of God with bible references</h2>
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}


export default Header;