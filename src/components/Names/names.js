import React from 'react';
import './names.css';
import { Container,Row,Col } from 'react-bootstrap';
import CardBox from '../../widgets/Card/card';
import namesOfGod from '../../data';
import ContactForm from '../../widgets/Form/form';

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
        <main style={{ background: ' url(../img/right_top_01.png)  repeat' }}>
            <Container>
                <Row>
                    {renderNames()}
                    <Col lg={6} md={6} className="d-flex align-items-center justify-content-center" style={{marginBottom:'60px'}}>
                        <h2 className="text-muted">16 Names Of God</h2>
                    </Col>
                </Row>
                <ContactForm />
            </Container>
        </main>
    )
}


export default Names;