import React, {Component} from 'react'
import Username from './username.jsx';
import Tweet from './tweet.jsx';
import Favorite from './favorite.jsx';
import Entities from './entities.jsx'

export class card extends Component {
    render() {
        let tweetcards = this.props.data.map((tweet)=>{
            console.log(tweet)
        return (
            <div class="card border-primary mb-3" style={{max_width: "18rem"}}>
              <div class="card-header"><Username data = {tweet}/></div>
              <div class="card-body text-primary">
                <h5 class="card-title"><Tweet data = {tweet}/></h5>
                <div class="card-text"><Entities data = {tweet}/></div>
                <Favorite data = {tweet}/>
              </div>
            </div>
            )
        })
        return (
            <div>
            {tweetcards}
            </div>
        )
    }
}


export default card