import React, { Component } from 'react'

export default class Updateinfo extends Component {
    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <h3>MY info</h3>
                    <div className="for-group">
                        <label>campus_name</label>
                        <input type="text" className="form-control" placeholder="campus_name"
                        onChange={e => this.campus_name = e.target.value}/>
                    </div>
                    <div className="for-group">
                        <label>course</label>
                        <input type="text" className="form-control" placeholder="course"
                        onChange={e => this.course = e.target.value}/>
                    </div>
                    <div className="for-group">
                        <label>profile_image</label>
                        <input type="text" className="form-control" placeholder="profile_image"
                        onChange={e => this.profile_image = e.target.value}/>
                    </div>
                    <div className="for-group">
                        <label>resume</label>
                        <input type="text" className="form-control" placeholder="resume"
                        onChange={e => this.resume = e.target.value}/>
                    </div>
                    
                    <div class="d-grid gap-2 ">
                    <button className="btn mt-2 btn-primary">Update Info</button>
                    </div>
                </form>
                
            </div>
        )
    }
}
