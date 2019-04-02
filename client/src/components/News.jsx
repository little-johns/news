import React from 'react';
import EachNews from './EachNews.jsx'



class News extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            allNews: this.props.data,
            display:null,
            show:null,
        }
    this.filterNews = this.filterNews.bind(this);
    this.renderNews = this.renderNews.bind(this);
    }
    componentDidMount() {
        this.setState({
            show: this.props.data[0]
        })
      }


    filterNews(stock){
        var filterData  = this.props.data.filter(each =>each.name===stock);
        var showNews = filterData.news.map(each=>
          <EachNews each={each} title={each.title}
          date={each.date} image={each.image} source={each.source}
          body={each.body} key = {each.name} />)
        this.setState=({
            show : showNews
        })
    }
    
    renderNews(stock){
        var showNews = stock.news.map(each=>
            <EachNews each={each} title={each.title}
            date={each.date} image={each.image} source={each.source}
            body={each.body} key = {each.name} />)
        return showNews;

    }

    
    render(){

        return(
            <div>
                <h1 style={{marginLeft:15,marginBottom:-5}}>New<a href="#"><span style={{padding:7,float:'right',color:'lightgreen',fontSize:22}}>Show More</span></a></h1><hr></hr>
                <div>{this.renderNews(this.props.data[0])}</div>
            </div>
            
        )
    }
}
export default News;

/*
<div>
<li key={each.news.title}>each.news.title</li>
<p>each.news.body</p>
</div>
*/
