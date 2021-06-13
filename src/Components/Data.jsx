import React, {Component} from 'react'
import axios from 'axios'

class Data extends Component {

    constructor() {
        super()
        this.state = {
            records: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3100/fetch-data')
            .then(res => {
                this.setState({
                    records: res.data
                })
            })
    }

    render() {
        const {records} = this.state
        return (
            <div>
                <div className="container">
                    <div className="list-group">
                        {records.map((record) => (
                            <div className="container">
                                <li key={record.id} className="list-group-item">{record.fname}</li>
                                <li key={record.id} className="list-group-item">{record.lname}</li>
                                <li key={record.id} className="list-group-item">{record.gender}</li>
                                <li key={record.id} className="list-group-item">{record.country}</li>
                                <li key={record.id} className="list-group-item">{record.hobby}</li>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Data