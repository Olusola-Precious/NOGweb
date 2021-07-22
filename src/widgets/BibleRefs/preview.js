import React from 'react';
import {Card} from 'react-bootstrap';


const Preview = (props) =>{

    // console.log(props.fetched);
    // console.log(props.data);
    
    const Loading = 
    (<Card border="secondary" style={{ width: '18rem' }}>
            <Card.Header>{props.err === '' ? '....' : props.err}</Card.Header>
        <Card.Body>
            
            <Card.Title>Loading Passage....</Card.Title>

        </Card.Body>
    </Card>)

    const parseChar = (text)=>{
        var new_text = text;
        if(text.includes("&lt;")){
            new_text = text.replace("&lt;", '(');
        }

        if(text.includes("&gt;")){
            new_text = text.replace("&gt;", ')');
        }


        return new_text
    }


    


const renderPassage = () =>{
    const template = <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Header>{props.data.Book} {props.data.Chapter}:{props.data.Verse}</Card.Header>
        <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
                {parseChar(props.data.Output)}
            </Card.Text>
        </Card.Body>
    </Card>

    return template;
}
    
    



    
        


    return (props.fetched ? renderPassage() : Loading)
    

}


export default Preview;