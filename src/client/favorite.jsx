import React, {Component} from 'react'


export class favorite extends Component {
    render() {
        let favorite = this.props.data.favorite_count
        let retweet = this.props.data.retweet_count
        return (
            <div class = "row" >
                <div class = "col-6">
                   <p> <i class="fas fa-retweet"></i> {retweet} </p>
                </div>
                <div class = "col-6">
                    <p><i class="far fa-heart"></i> {favorite} </p>
                </div>
            </div>
        )
    }
}


export default favorite