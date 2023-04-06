import React, { Component } from 'react'
import NewsItem from './NewsItem'

class News extends Component {
  articles = [ {
    "source": {
        "id": null,
        "name": "The Guardian"
    },
    "author": "Simon Burnton in Chattogram",
    "title": "Chris Woakes heads into Bangladesh T20 series with eye on ODI World Cup",
    "description": "Matthew Mott’s white-ball team are light on batters for the three-game series, while the bowlers are set to rotateHaving played three 50-over matches in Bangladesh with an eye on this year’s ODI World Cup, England now play three 20-over matches, also with an …",
    "url": "https://www.theguardian.com/sport/2023/mar/08/chris-woakes-heads-into-bangladesh-t20-series-with-eye-on-odi-world-cup",
    "urlToImage": "https://i.guim.co.uk/img/media/3ec612cb565578ad2604982cf60e3d6a8bb063e4/0_0_4212_2528/master/4212.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bcfcfd5de04f0ec0eae8714a12167bb3",
    "publishedAt": "2023-03-08T15:00:42Z",
    "content": "Having played three 50-over matches in Bangladesh with an eye on this years ODI World Cup, England now play three 20-over matches, also with an eye on this years ODI World Cup. Shorter format, simila… [+4490 chars]"
},
{
    "source": {
        "id": null,
        "name": "The Guardian"
    },
    "author": "Ali Martin",
    "title": "Charlotte Edwards: ‘There’s an edge to me – I am a winner’",
    "description": "Fresh from Mumbai Indians’ win in the Women’s IPL final, the head coach speaks about the X-factor player England turned down and her desire to coach internationally“It’s been the most unbelievable six weeks I have had in cricket,” says Charlotte Edwards, fres…",
    "url": "https://www.theguardian.com/sport/2023/mar/28/charlotte-edwards-theres-an-edge-to-me-i-am-a-winner-cricket",
    "urlToImage": "https://i.guim.co.uk/img/media/d58ebb4301e43224ea02ce250961911677d1e467/0_116_1080_647/master/1080.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0fb7813e6e61aca0631e63fb385f6ed0",
    "publishedAt": "2023-03-28T14:42:48Z",
    "content": "Its been the most unbelievable six weeks I have had in cricket, says Charlotte Edwards, fresh off the plane after the victory with Mumbai Indians in the Womens Premier League final on Sunday and abou… [+5658 chars]"
},
{
    "source": {
        "id": null,
        "name": "The Guardian"
    },
    "author": "Megan Schutt",
    "title": "India’s Women’s Premier League is a giant leap: we are hyped as much as the men | Megan Schutt",
    "description": "The parity players are getting in India is the generational change women are striving for in life on a global scaleThe Women’s Premier League has everyone buzzing. To say I’ve never experienced anything like it before would be an understatement. Everything he…",
    "url": "https://www.theguardian.com/sport/2023/mar/11/indias-womens-premier-league-is-a-giant-leap-we-are-hyped-as-much-as-the-men",
    "urlToImage": "https://i.guim.co.uk/img/media/5827e157d8d1d735bfeb7c44a96ab9b262bcdade/0_210_3147_1888/master/3147.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=7db5312933cfac69adb272b222241afd",
    "publishedAt": "2023-03-10T14:00:04Z",
    "content": "The Womens Premier League has everyone buzzing. To say Ive never experienced anything like it before would be an understatement. Everything here is hyped to the max training, meetings, games, crowds,… [+4462 chars]"
},
{
    "source": {
        "id": null,
        "name": "The Guardian"
    },
    "author": "Tom Dart in Houston",
    "title": "Major League Cricket: will a $120m moonshot find success in America?",
    "description": "Players such as Mitch Marsh, Quinton de Kock and Liam Plunkett are bringing their experience to a notoriously tough marketIt was an obvious place to launch a sporting moonshot – a cricket league that can survive and thrive in America.Last week, Space Center H…",
    "url": "https://www.theguardian.com/sport/2023/mar/21/major-league-cricket-will-a-120m-moonshot-find-success-in-america",
    "urlToImage": "https://i.guim.co.uk/img/media/fa33c2bfa30d80084a679e86f51f6c03a728c338/598_111_2931_1760/master/2931.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8a9fa25c59be08fbdac77ac5e9ed3cf8",
    "publishedAt": "2023-03-21T08:00:09Z",
    "content": "It was an obvious place to launch a sporting moonshot a cricket league that can survive and thrive in America.\r\nLast week, Space Center Houston hosted a reveal of next-generation spacesuits for a lun… [+7344 chars]"
}]
  constructor(){
    super();
    console.log("hello i am a constructor from new component")
    this.state = {
    articles : this.articles,
    loading : false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4"  key={element.url} >
           <NewsItem title={element.title.slice(0,44)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
           </div>
        })}
         
        </div>
      </div>
    )
  }
}

export default News