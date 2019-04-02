import React from 'react';

class EachNews extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            view:Math.floor(386*Math.random())
        }
    this.addView = this.addView.bind(this);
    }

    addView(){
        this.setState({
            view: this.state.view + 1
        })
    }

    render(){
        return (
            <div>
            <a href="#">
            <div  style={{display: 'inline-block'}} onClick ={()=>this.addView()}>
                <img width={150} height={150} style={{margin:5,float:'left',borderRadius: 10}}mode='fit' className="image" src={this.props.image}/>
                <p className="source" style={{color:'black'}}>{this.props.source.toUpperCase()}<span className="time" style={{color:'gray',marginLeft:16}}>{this.props.date}</span></p>
            <h2 className="title" style={{color:'black',margin:-10}}>{this.props.title}</h2>
                <p className="body" style={{color:'black'}}>{this.props.body.split(".").slice(0,4).join(".")}</p>
                <span className="view" style={{color:'gray'}}>View : {this.state.view}</span>
                
                
            </div>
            </a>
            </div>
        )
    }

}

export default EachNews;