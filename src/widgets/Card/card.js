import React from 'react';
import './card.css';
import Bible from '../BibleRefs/bible';


const CardBox = ({ name, meaning, significance, passages})=>{

    const renderPassages = (passage) =>{
        const template = passage.map((item,i)=>{
            return (
                <Bible point={item} key={i} break={(i+1)%2===0}/>
            )
        });

        return template
    }
    

    return (
    <div className="box">
            <h3>{name}</h3>
            <h5>({meaning})</h5>
            <p>{significance}</p>
            {/* <span class="ref-bible">
                ${renderBiblereferences(references)}
            </span> */}
        {/* <span><a href="#df">Bible 1</a> <a href="#df">Bible 2</a> <a href="#df">Bible 3</a></span> */}
            {renderPassages(passages)}
        
    </div>
    )
}

export default CardBox;