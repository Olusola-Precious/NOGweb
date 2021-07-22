import React from 'react';
import './names.css';
import { Container,Row,Col } from 'react-bootstrap';
import CardBox from '../../widgets/Card/card';
import namesOfGod from '../../data';
import ContactForm from '../../widgets/Form/form';
import bg from './right_top_01.png';


const Names = () =>{
    const renderNames = ()=>{
        //console.log(namesOfGod);
        const template = namesOfGod.map((item,i)=>{
            return (
                <Col lg={4} md={6} key={i} style={{marginBottom:'60px'}}>
                    <CardBox name={item.name} meaning={item.meaning} significance={item.significance} passages={item.references} />
                </Col>
            )
            
        })

        return template;
    }


    return(
        <main style={{ background: `url(${bg})` }}>
            <Container>
                <Row>
                    {renderNames()}
                    <Col lg={6} md={6} className="d-inline-block mx-auto my-5" style={{marginBottom:'60px'}}>
                        {/* <h2 className="text-muted">16 Names Of God</h2> */}
                        <h2 className="callout">
                            16 Names Of God
                            {/* Source: https://bible.knowing-jesus.com/topics/Proclaiming-God%E2%80%99s-Name */}
                        </h2>

                        <figure class="quote">
                            <blockquote>
                                <cite>For I proclaim the name of the Lord;
                                    Ascribe greatness to our God!</cite>
                            </blockquote>
                            <figcaption>
                                &mdash; <a href="https://bible.knowing-jesus.com/topics/Proclaiming-God%E2%80%99s-Name" rel="noreferrer" target="_blank">Deuteronomy 32:3</a>
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
                <ContactForm />
            </Container>
        </main>
    )
}


export default Names;