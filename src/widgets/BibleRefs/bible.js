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

    parseBiblePassage = ()=>{
        let point = this.props.point
        //console.log(point)
        var book,passage;
        let splits = point.split(' ');
        if(splits.length > 2){
            book = splits[0] +' '+ splits[1];
            passage = splits[2];
        }
        else{
            book = splits[0];
            passage = splits[1];
        }

        return [book,passage]
        //console.log("Book Of "+ book + "then " + passage);
        
        
    }


    request = (url,params)=>{
        var options = {
            method: 'GET',
            url,
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
        
        
            let [book,passage] = this.parseBiblePassage();
            let [chapter, verse] = passage.trim().split(':');
            var url,params;
            //console.log(`Book of ${book} Chapter ${chapter} Verse ${verse}`)
            if(verse.includes('-')){
                let [verseFrom, verseTo] = verse.split('-');
                url = 'https://ajith-holy-bible.p.rapidapi.com/GetVerses';
                params = { VerseTo: verseTo, VerseFrom: verseFrom, chapter: chapter, Book: book };
            }else{
            url = 'https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter';
            params = { Book: book, chapter: chapter, Verse: verse }
            }

            this.request(url,params);
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