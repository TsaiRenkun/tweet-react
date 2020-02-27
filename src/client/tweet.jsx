import React, {Component} from 'react'


export class tweet extends Component {
    render() {
        let tweet = this.props.data.text
        return (
            <p>
            {tweet}
            </p>
        )
    }
}


export default tweet