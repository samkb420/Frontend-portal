
import React, { Component } from 'react'

export default class Home extends Component {
    

    render() {
        if(this.props.user){
            return(
                <>
                {/* dashboard Data */}
                <h2>Hi {this.props.user.first_name} {this.props.user.last_name}</h2>
                <p>{this.props.user.email} {this.props.user.resume} {this.props.user.profile_image} {this.props.user.year}</p>
                </>
            )
        }
        return (
            <div>
                {/* home page */}
                    <h2>You are not logged in</h2>
     
            </div>
        )
    }
}
