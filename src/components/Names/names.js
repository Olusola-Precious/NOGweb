import React from 'react';
import './names.css';
import { Container,Row,Col } from 'react-bootstrap';
import CardBox from '../../widgets/Card/card';
import namesOfGod from '../../data';

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
                </Row>
            </Container>
        </main>
    )
}


export default Names;