import React, {Component} from 'react'
import axios from 'axios'

class Register extends Component {

    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            gender: '',
            country: '',
            hobby: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleFnameChange = this.handleFnameChange.bind(this)
        this.handleLnameChange = this.handleLnameChange.bind(this)
        this.handleGenderChange = this.handleGenderChange.bind(this)
        this.handleCountryChange = this.handleCountryChange.bind(this)
        this.handleHobbyChange = this.handleHobbyChange.bind(this)
    }

    handleFnameChange(e) {
        this.setState({
            firstname: e.target.value
        })
    }

    handleLnameChange(e) {
        this.setState({
            lastname: e.target.value
        })
    }

    handleGenderChange(e) {
        this.setState({
            gender: e.target.value
        })
    }

    handleCountryChange(e) {
        this.setState({
            country: e.target.value
        })
    }

    handleHobbyChange(e) {
        this.setState({
            hobby: e.target.value
        })
    }

    handleFormSubmit(e) {
        e.preventDefault()
        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            gender: this.state.gender,
            country: this.state.country,
            hobby: this.state.hobby
        }
        axios.post('http://localhost:3100/submit-data', {user})
            .then(res => {
                const msg = res.data
                alert(msg)
            })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="">First name</label>
                            <input 
                                type="text"
                                className="form-control"
                                value={this.state.firstname}
                                onChange={this.handleFnameChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Last name</label>
                            <input 
                                type="text"
                                className="form-control"
                                value={this.state.lastname}
                                onChange={this.handleLnameChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Gender</label>
                            <input 
                                type="text"
                                className="form-control"
                                value={this.state.gender}
                                onChange={this.handleGenderChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Country</label>
                            <input 
                                type="text"
                                className="form-control"
                                value={this.state.country}
                                onChange={this.handleCountryChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Hobby</label>
                            <input 
                                type="text"
                                className="form-control"
                                value={this.state.hobby}
                                onChange={this.handleHobbyChange}
                            />
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register