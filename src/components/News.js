import React, { Component } from 'react'
import NewsItem from './NewsItem'

class News extends Component {
  constructor(){
    super();
    console.log("hello i am a constructor from new component")
    this.state = {
    articles : [],
    loading : false,
    page:1
    }
  }
  async componentDidMount(){
    console.log("i run after render")
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c6a9c67be8754daf91164909e38a2d93&page=1&pageSie=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles:parsedData.articles, totalResults: parsedData.totalResults})
  }
  handlePrevClick=async()=>{
   console.log("prev")
   let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c6a9c67be8754daf91164909e38a2d93&page=${this.state.page-1}&pageSie=20`;
   let data = await fetch(url);
   let parsedData = await data.json()
   console.log(parsedData)
 this.setState({
   page:this.state.page-1,
   articles:parsedData.articles
 })
  }
  handleNextClick=async ()=>{
  console.log("next")
  if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

  }
  else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c6a9c67be8754daf91164909e38a2d93&page=${this.state.page+1}&pageSie=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
  this.setState({
    page:this.state.page+1,
    articles:parsedData.articles
  })}
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4"  key={element.url} >
           <NewsItem title={!element.title?"":element.title} description={!element.description?"":element.description} imageUrl={element.urlToImage?element.urlToImage:"https://www.shutterstock.com/image-vector/background-screen-saver-on-breaking-260nw-1538146961.jpg"} newsUrl={element.url}/>
           </div>
        })}         
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News