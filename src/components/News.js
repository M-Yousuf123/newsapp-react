import React, { Component } from 'react'
import NewsItem from './NewsItem'

class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
           <div className="col-md-4">
           <NewsItem title="myTitle" description="Yay you hav done"/>
           </div>
           <div className="col-md-4">
           <NewsItem title="myTitle" description="Yay you hav done"/>
           </div>
           <div className="col-md-4">
           <NewsItem title="myTitle" description="Yay you hav done"/>
          </div>
        </div>
      </div>
    )
  }
}

export default News