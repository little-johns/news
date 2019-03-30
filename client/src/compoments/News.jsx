import React from 'react';
import ReactDOM from 'react-dom';

class News extends React.Component(){
    constructor(props){
        super(props)
        this.state =({
            allNews: data,
            showNews:[],
            news:[],
            show:[]
        })
    }


    ComponentdidMount(){
        this.setState({
            show: 'something'
        })

    }

    filterNews(stock){
        var filterData  = data.filter(each =>each.name===stock);
        var showNews = filterData.map(each=> (
            <div>
                <li key={each.news.title}>each.news.title</li>
                <p>each.news.body</p>)
            </div>))
        this.setState=({
            showNews : showNews
        })
    }



    





    
    render(){
        return(
            <div>
                <h1>React Connect</h1>
                {/* <div>{this.state.showNews}</div> */}
            </div>
            
        )
    }
}