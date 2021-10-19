
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Jobs from './Jobs'

export default class Home extends Component {
    

    render() {
        if(this.props.user){
            return(
                <>
                {/* dashboard Data */}

                <div className="container mt-4">
                <Jobs/>
                    <div className="row mt-4">
                        <div className="col-md-2">
                        feeeeg
                        </div>

                        <div className="col-md-8">
                        <h2>Hi {this.props.user.first_name} {this.props.user.last_name}</h2>
                <p>{this.props.user.email} {this.props.user.resume} {this.props.user.year}</p>
                            
                            </div>
                            <div className="col-md-2">
                           
                        </div>
                    </div>

                </div>
               
                </>
            )
        }else{
            return <Redirect to="/login"/>
        }
        
    }
}
