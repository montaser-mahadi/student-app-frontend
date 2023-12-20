import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br><br></br><br></br><br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Student First Name: </label>
                            <div> { this.state.student.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Student Second Name: </label>
                            <div> { this.state.student.secondName }</div>
                        </div>
                        <div className = "row">
                            <label> Student Age: </label>
                            <div> { this.state.student.age }</div>
                        </div>
                        <div className = "row">
                            <label> Student Address: </label>
                            <div> { this.state.student.address }</div>
                        </div>
                        <div className = "row">
                            <label> Student Phone: </label>
                            <div> { this.state.student.parentPhone }</div>
                        </div>
                        <div className = "row">
                            <label> Student Class Name: </label>
                            <div> { this.state.student.className }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStudentComponent
