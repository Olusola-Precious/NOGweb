import React,{Component} from 'react';
import './bible.css';
import axios from 'axios';
import Preview from './preview';
//import Preview from './previewCard';

class Bible extends Component {
    state = {
        fetched: false,
        scripture:{},
        isShow:false
    }


    request = (params)=>{
        var options = {
            method: 'GET',
            url: 'https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter',
            params,
            headers: {
                'x-rapidapi-key': 'e24119d8c0msh62e1b8f137bf56fp181da0jsne7b0d1f9d17f',
                'x-rapidapi-host': 'ajith-holy-bible.p.rapidapi.com'
            }
        };
        if (this.state.fetched) return

        axios.request(options)
        .then((response)=>{
            // console.log(response.data);
            let fetched= true;
            let passage = response.data;
            //console.log(passage.Output);
            //console.log(passage);
            this.setState({
                fetched,
                scripture:passage
            })

            return


            //console.log(this.state)
        })
        .catch((error)=>{
            
            console.log(error);
        })

        return
    }

    GetPassage(){
        
        
            let point = this.props.point
            //console.log(point)
            let [book, passage] = point.split(' ');
            //console.log("Book Of "+ book + "then " + passage);
            let [chapter, verse] = passage.split(':');
            //console.log(`Book of ${book} Chapter ${chapter} Verse ${verse}`)
            let params = { Book: book, chapter: chapter, Verse: verse }
            this.request(params);
            //console.log(this.state);
            this.setState({ isShow: true })

        //return 
        
        

        //return point;

    }




    render(){
        return (
        <span className="passage" 
        onMouseEnter={() => { this.GetPassage()}}
        onMouseLeave={() => { this.setState({ isShow: false }) }}
        //onClick={(e)=>this.GetPassage()}
        >
            {/* {this.state.isShow ?  : null} */}
            {this.state.isShow ? <Preview fetched={this.state.fetched} data={this.state.scripture} /> : null}
            {this.props.point}
            {this.props.break ? <br /> : null}
        </span>
            )
    }
    
}

export default Bible;