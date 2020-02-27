import React from 'react';
import ReactDOM from 'react-dom';
import Tweets from 'tweets';
import Cards from './cards.jsx';


class App extends React.Component {
  render() {
    let tweet = Tweets.tweets
    console.log(tweet[1])

    return (
      <div>
        <Cards data={tweet}/>
        tweets
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");