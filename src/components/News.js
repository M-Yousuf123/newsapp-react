import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
   capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props){
    console.log("hello")
    super(props);
    this.state = {
    articles : [],
    loading : true,
    page:1,
    totalResults:0
    }
    document.title= `${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c6a9c67be8754daf91164909e38a2d93&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles:parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading:false,
    })
 
  }

  async componentDidMount(){
    console.log("iamrunngin")
    if(this.state.loading === false) return;
    console.log("afterifiamrunngin")
   this.updateNews();
  }
  fetchMoreData = async () => {
     this.setState({
      page:this.state.page+1
     })
     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c6a9c67be8754daf91164909e38a2d93&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     let data = await fetch(url);
     let parsedData = await data.json()
     console.log(parsedData)
     this.setState({
       articles:this.state.articles.concat(parsedData.articles), 
       totalResults: parsedData.totalResults, 
     })
  };
  render() {
    // console.log("i am running")
    return (
      <>
      <h1 className="text-center" style={{margin: '35px 0px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        {this.state.articles.map((element, i)=>{
          return <div className="col-md-4"  key={i} >
           <NewsItem title={!element.title?"":element.title} description={!element.description?"":element.description} imageUrl={element.urlToImage?element.urlToImage:"https://www.shutterstock.com/image-vector/background-screen-saver-on-breaking-260nw-1538146961.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
           </div>
        })}  
        </div>
        </div>
      
        </InfiniteScroll>       
      </>
  
    )
  }
}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category:'general'
}
News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}
export default News