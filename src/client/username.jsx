import React, {Component} from 'react'


export class username extends Component {
    render() {
        let username = this.props.data.user.screen_name
        return (
            <p>
            {username}
            </p>
        )
    }
}


export default username