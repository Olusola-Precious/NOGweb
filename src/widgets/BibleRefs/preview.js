import React from 'react';
import {Card} from 'react-bootstrap';


const Preview = (props) =>{

    //console.log(props.fetched);
    //console.log(props.data);
    const Loading = 
    (<Card border="secondary" style={{ width: '18rem' }}>
        <Card.Header>....</Card.Header>
        <Card.Body>
            
            <Card.Title>Loading</Card.Title>

        </Card.Body>
    </Card>)


    const template =  <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Header>{props.data.Book} {props.data.Chapter}:{props.data.Verse}</Card.Header>
        <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
                {props.data.Output}
            </Card.Text>
        </Card.Body>
    </Card>
    
    



    
        


    return (props.fetched ? template : Loading)
    

}


export default Preview;