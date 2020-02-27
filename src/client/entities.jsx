import React, {Component} from 'react'


export class entities extends Component {
    render() {
        let photo = this.props.data.entities.media
        console.log(photo)
        if (photo === undefined || photo.length === 0) {
            return (
                <div>
                   <img src = ""/>
                </div>
            )
        } else {
          return (
                <div>
                   <img src = {photo[0].media_url}/>
                </div>
            )
        }
    }
}


export default entities