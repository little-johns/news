import React from 'react';
import moment from 'moment'

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
        <div className="news-each-news" onClick ={()=>this.addView()}>
          <div className="news-image-container">
            <img className="news-image" src={this.props.image}/>
          </div>
          <div className="news-text-container">
            <p className="news-source" >
              {this.props.source.toUpperCase()}
              <span className="news-time">{moment(this.props.date).format("D MMM")}</span>
            </p>
            <h3 className="news-title" >{this.props.title}</h3>
            <p className="news-body" >{this.props.body.split(".").slice(0,2).join(".")}</p>

            <span className="news-view">
              <svg title="2,476 views" width="12" height="9" viewBox="0 0 14 11"><path fill-rule="evenodd" d="M7,10.8888889 C3.13400675,10.8888889 0,7.04766168 0,5.44444444 C9.81687425e-17,3.84122721 3.13400675,0 7,0 C10.8659932,0 14,3.84312609 14,5.44444444 C14,7.0457628 10.8659932,10.8888889 7,10.8888889 Z M7,7.77777778 C8.28866442,7.77777778 9.33333333,6.73310886 9.33333333,5.44444444 C9.33333333,4.15578003 8.28866442,3.11111111 7,3.11111111 C5.71133558,3.11111111 4.66666667,4.15578003 4.66666667,5.44444444 C4.66666667,6.73310886 5.71133558,7.77777778 7,7.77777778 Z"></path></svg>
              <span className="news-view-tag">{this.state.view}</span>
            </span>   
          </div>
        </div>
      )
    }

}

export default EachNews;